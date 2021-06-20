function parseMarkdown(data, contentSource) {
  var markdownParsed;

  if (data == null) {
    markdownParsed = "Failed to load Markdown document.";
  }
  else {
    markdownParsed = data;
  }

  let htmlTemplate = `
<div class="card sketchbook-item">
    {{ content }}
    <a href="{{ source }}" target="_blank" style="text-decoration: none;">🗎</a>
</div>
  `;
  nunjucks.configure({autoescape: false});
  document.getElementById("sketchbook").innerHTML += nunjucks.renderString(htmlTemplate, {content: markdownParsed, source: contentSource});
}

function collect(url) {
  var xmlHTTP = new XMLHttpRequest();

  xmlHTTP.onreadystatechange = function() { 
    if (xmlHTTP.readyState == 4) {
      if (xmlHTTP.status == 200) {
        parseMarkdown(xmlHTTP.responseText, url);
      }
      else {
        parseMarkdown(null, url);
      }
    }
  }

  xmlHTTP.open("GET", url, true); 
  xmlHTTP.send();
}

function buildPage() {
  console.log("Rendering sketchbook content...");
  console.time("Build time");

  var xmlHTTP = new XMLHttpRequest();

  xmlHTTP.onreadystatechange = function() {
    if (xmlHTTP.readyState == 4) {
      if (xmlHTTP.status == 200) {
        var markdownIndex = JSON.parse(xmlHTTP.responseText);
        for (markdownIndexKey in markdownIndex["index"]) {
          let markdownDocument = markdownIndex["index"][markdownIndexKey];
          collect("/sketchbook/markdown/" + markdownDocument);
        }
        console.log("Render completed successfully.");
        console.timeEnd("Build time");
      }
      else {
        document.getElementById("error").innerHTML += '<div class="message-box-container"><div class="message-box"><p>|!| Failed to load content completely.</p></div></div>';
        console.log("Unable to fetch file-index.json.");
        console.timeEnd("Build time");
      }
    }
  };
  xmlHTTP.open("GET", "/sketchbook/file-index.json", true); 
  xmlHTTP.send();
}

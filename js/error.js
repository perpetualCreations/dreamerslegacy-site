var xmlHTTP = new XMLHttpRequest();
xmlHTTP.onreadystatechange = function() { 
  if (xmlHTTP.readyState == 4) {
    render(xmlHTTP.status);
  }
}
xmlHTTP.open("GET", window.location, true); 
xmlHTTP.send();

function render(status) {
  document.title = "Error " + String(status);
  document.getElementById("code").textContent = String(status);
  let statusType = String(status).substring(0, 1);
  if (statusType == "2" || statusType == "1") {
    // I know nothing horrific should happen,
    // but I have a nagging feeling that this is going to cause an infinite loop
    window.location.replace("https://dreamerslegacy.xyz/index.html");
  }
  else if (statusType == "4") {
    if (status == 404) {
      document.getElementById("message").textContent = "Requested resource not found";
    }
    else if (status == 403) {
      document.getElementById("message").textContent = "Requested resource exists, however is forbidden to be accessed by the client."
    }
    else {
      document.getElementById("message").textContent = "A client error has occurred.";
    }
  }
  else if (statusType == "5") {
    document.getElementById("message").textContent = "A server error has occurred.";
  }
}

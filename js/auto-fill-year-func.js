/* like auto-fill-year.js but function form for body-tag-bound onload binding */

function autoFillYear() {
    var target = document.getElementById("year-footer-text");
    var now = new Date();
    var year = now.getFullYear();
    target.textContent = "dreamer's legacy, " + year + "-" + (year + 1);
}

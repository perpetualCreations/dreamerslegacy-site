/* automatically fill years xxxx-xxxx at footer-text */

var target = document.getElementById("year-footer-text");
var now = new Date();
var year = now.getFullYear();

onload = function () {
    target.textContent = "dreamer's legacy, " + year + "-" + (year + 1);
};
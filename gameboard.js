// Made by Gabriel Brown, 2018

var boxSideInPixels = 40;
var width = 5;
var height = 5;

function UpdateGrid() {

    var newWidth = document.getElementById("gridwidth-input").value;
    var newHeight = document.getElementById("gridheight-input").value;

    changeDimensions(newWidth, newHeight);
}

function changeDimensions(newWidth, newHeight) {

    var gameboard = document.getElementById("gameboard");
    var newWidthInPx = boxSideInPixels * newWidth;
    var newHeightInPx = boxSideInPixels * newHeight

    /* gameboard.setAttribute("style", "width: " + (boxSideInPixels * newWidth) + "px"); */
    gameboard.setAttribute("style", "height: " + newHeightInPx + "px; width: " + newWidthInPx + "px; margin-top: " + (-newHeightInPx/2) + "px; margin-left: " + (-newWidthInPx/2) + "px;");


}
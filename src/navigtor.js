const remote = require('electron').remote;
const shell = require('electron').shell;




var pages=['ui'];


function nextPage(currentPageID) {


window.location.href = 'index.html';
    
}


function closeWindow() {
    window.close();
}
function openURL(url) {
    shell.openExternal(url);
}

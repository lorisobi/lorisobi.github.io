document.getElementById("consoleInput").focus();

function search(ele, content) {
    if(event.key === 'Enter') {
        var paragraph = document.getElementById("consoleLog");
        paragraph.innerHTML += content + "<br />";
        window.scrollTo(getPosition(document.getElementById("bottom")));    
    }
}


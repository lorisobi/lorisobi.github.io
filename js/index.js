document.getElementById("consoleInput").focus();

function search(ele, content) {
    if(event.key === 'Enter') {
        var paragraph = document.getElementById("consoleLog");
        paragraph.innerHTML += content + "<br />";
        window.location.href = "#bottom";  
        document.getElementById("consoleInput").innerHTML = "";
        document.getElementById("consoleInput").focus();

    }
}


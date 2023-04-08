document.getElementById("consoleInput").focus();

function search(ele, content) {
    if(event.key === 'Enter') {
        alert(ele.value);  
        var paragraph = document.getElementById("consoleLog");

        paragraph.innerHTML += "<br />" + content;      
    }
}


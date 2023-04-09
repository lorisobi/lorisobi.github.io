document.getElementById("consoleInput").focus();

var programs = ["about", "website"]



function search(ele, content) {
    if(event.key === 'Enter') {
        var paragraph = document.getElementById("consoleLog");
        paragraph.innerHTML += runProgram(content) + "<br />";
        window.location.href = "#bottom";  
        document.getElementById("consoleInput").innerHTML = "";
        document.getElementById("consoleInput").focus();

    }
}

function runProgram(command){
    if (command in programs){
        return "Moin";
    }
    else{
        return "Sorry, command '" + command + "' was not found."
    }
}


document.getElementById("consoleInput").focus();

const programs = ["about", "website"];



function search(ele, content) {
    if(event.key === 'Enter') {
        var paragraph = document.getElementById("consoleLog");
        paragraph.innerHTML += runProgram(content) + "<br />";
        window.location.href = "#bottom";  
        document.getElementById("consoleInput").value = "";
        document.getElementById("consoleInput").focus();

    }
}

function runProgram(command){
    if (programs.includes(command)){
        return "Moin";
    }
    else{
        return "Sorry, command '" + command + "' was not found."
    }
}


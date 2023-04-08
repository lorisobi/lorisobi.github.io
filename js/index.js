function search(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);  
        var paragraph = document.getElementById("consoleLog");

        paragraph.textContent += ele;      
    }
}


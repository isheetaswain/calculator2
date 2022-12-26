let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err) {
        alert("Invalid")
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}


// Colors


const colors = ['#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F'];
const n = Math.floor(Math.random() * 5);
const color = colors[n];
document.documentElement.style.setProperty('--color1', color);
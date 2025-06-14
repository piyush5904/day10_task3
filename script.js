function multiply() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "The Result Is: " + (a * b);
}

function divide() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    if (b === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML = "The Result Is: " + (a / b);
    }
}

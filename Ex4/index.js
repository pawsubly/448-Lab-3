function updateText()
{
    let borderR = document.getElementById("RedBorder").value;
    let borderG = document.getElementById("GreenBorder").value;
    let borderB = document.getElementById("BlueBorder").value;
    let backgroundR = document.getElementById("RedBackground").value;
    let backgroundG = document.getElementById("GreenBackground").value;
    let backgroundB = document.getElementById("BlueBackground").value;
    let paragraph = document.getElementById("paragraph");

    paragraph.style.backgroundColor = `rgb(${backgroundR},${backgroundG},${backgroundB})`;
    paragraph.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
}
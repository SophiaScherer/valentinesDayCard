const buttonStatements = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
];

function changeText() {
    const newText = buttonStatements[Math.floor(Math.random()*buttonStatements.length)];
    document.getElementById("newMessage").childNodes[0].nodeValue = newText;
}

function increaseFontSize() {
    let txt = document.getElementById("yes");
    let style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    let currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize * 1.5) + "px";
}

function show() {
    document.getElementById("yesImage").style.display = "block";
    document.getElementById("yes").style.display = "none";
}
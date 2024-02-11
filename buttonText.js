const buttonStatements = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain??",
    "This could be a mistake",
    "Have a heart!",
    "Don't be so cold :(",
    "Change of heart??",
    "Won't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart :("
];

function changeText() {
    const newText = buttonStatements[Math.floor(Math.random()*buttonStatements.length)];
    document.getElementById("newMessage").childNodes[0].nodeValue = newText;
}

function increaseFontSize() {
    let txt = document.getElementById("yes");
    let style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    let currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + "px";
}

function show() {
    document.getElementById("testId").style.display = "none";
    document.getElementById("valentinesMessage").innerText = "Huzzazh! :) \n (pretend there's confetti)";
    const image = document.getElementById("startImage");
    image.src = "https://i.pinimg.com/originals/53/20/6c/53206c866a471f960041a8f1b48c95b1.gif";
}
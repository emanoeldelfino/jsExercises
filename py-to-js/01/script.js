var nameInput = document.getElementById('name');

var resSpan = document.getElementById('res');

var inputSubmit = document.getElementById('submit');

inputSubmit.addEventListener('click', greet);

function greet() {
    const {value: nameValue} = nameInput;
    var text = `Hello ${nameValue}, nice to meet you!`
    typeWrite(string = text, elem = resSpan, delay = 300);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWrite(string, elem, delay) {
    for (i=0; i < string.length; i++) {
        await sleep(delay);
        elem.innerHTML += string.charAt(i);
    }
}

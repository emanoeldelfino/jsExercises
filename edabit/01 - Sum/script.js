function sum(x, y) {
    return x + y;
}

const n1Elem = document.getElementById('n1');
const n2Elem = document.getElementById('n2');
const equalElem = document.getElementById('equal')
const res = document.getElementById('res');

equalElem.addEventListener('click', calculate)

function calculate() {
    res.innerText = sum(Number(n1Elem.value), Number(n2Elem.value));
}
function nextNum(num) {
    return Number(num) + 1;
};

num = prompt('Type a number: ');
next = nextNum(num=num);

document.write(`The number following ${num} is ${next}.`)
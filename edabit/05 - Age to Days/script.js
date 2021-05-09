function calcAge(age) {
    return Number(age) * 365;
}

years = prompt('Type a age: ');
days = calcAge(age=years);

document.write(`${years} years is ${days} days.`)
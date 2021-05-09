function triArea(base, height) {
    return (base * height) / 2;
}

base = Number(prompt('Base of triangle: '))
height = Number(prompt('Height of triangle: '))

area = triArea(base=base, height=height);
document.write(`The area of the triangle with base ${base} and height ${height} is ${area}.`)
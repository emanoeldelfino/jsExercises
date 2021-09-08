/**
 * @param {string} str - The string
 * @param {string} char1 - Character 1
 * @param {string} char2 - Character 1
 */
function doubleSwap(str, char1, char2) {
    const regex = new RegExp(`(${char1}|${char2})`, 'g');
    return str.replace(regex, (str, char) => char == char1 ? char2 : char1);
}

console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));

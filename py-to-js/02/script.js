var date = document.querySelector('input#birth');
var res = document.querySelector('span#res')

date.addEventListener('input', () => {
    res.innerHTML = `You were born in ${date["value"]}.`;
})

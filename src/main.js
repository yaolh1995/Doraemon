import String from './css.js';
let write = window.write;
let style = document.querySelector("style")
let string = "";
let a = 0;

function myWrite() {
    if (String[a] === "\n") {
        string += "<br>"
    } else if (String[a] === " ") {
        string += "&nbsp"
    } else {
        string += String[a]
    }
    a++;
    write.innerHTML = string;
    style.innerHTML = String.substring(0, a);
    write.scrollTo(0, 9999)
    if (a > String.length - 1) {
        clearInterval(window.id)
    }
};

window.id = setInterval(myWrite,20);
bn.addEventListener('click', (e) => {
    const t = e.target;
    console.log(t.className)
    if (t.className === 'bnstop') {
        clearInterval(window.id)
    }
    if (t.className === 'bnplay') {
        clearInterval(window.id);
        window.id = setInterval(myWrite, 20)
    }
    if (t.className === 'bnslow') {
        clearInterval(window.id);
        window.id = setInterval(myWrite, 50)
    }
    if (t.className === 'bnfast') {
        clearInterval(window.id);
        window.id = setInterval(myWrite, 0)
    }
})
/* stop{clearInterval(Id)} */
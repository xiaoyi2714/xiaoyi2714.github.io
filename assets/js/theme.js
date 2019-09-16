const theme = {
    salmon: {
        name: "小甜心",
        color1: 'salmon',
        color2: 'lightsalmon',
        color3: 'mistyrose',
        contrast: 'white',
    }
};

function setTheme(someTheme) {
    let els = [];

    // color1
    els = document.querySelectorAll('.bg-1,');
    for(let el of els) {
        el.style.backgroundColor = someTheme.color1;
    }
    els = document.querySelectorAll('#blog h1,#blog h2,#blog h3,#blog h4,#blog h5,#blog h6,#blog p,#blog ul,#blog ol,#blog p>code, #blog pre');
    for(let el of els) {
        el.style.color = someTheme.color1;
    }
    els = document.querySelectorAll('#blog hr,#blog blockquote');
    for(let el of els) {
        el.style.borderColor = someTheme.color1;
    }

    // color2
    els = document.querySelectorAll('.bg-2,.bg2-hover');
    for(let el of els) {
        el.style.backgroundColor = someTheme.color2;
    }
    els = document.querySelectorAll('.bg2-hover:hover');
    for(let el of els) {
        el.style.color = someTheme.color2;
    }

    // color3
    els = document.querySelectorAll('#blog blockquote,#blog p>code, #blog pre');
    for(let el of els) {
        el.style.backgroundColor = someTheme.color3;
    }

    // contrast
    els = document.querySelectorAll('.bg-3,.bg2-hover:hover');
    for(let el of els) {
        el.style.backgroundColor = someTheme.color3;
    }

}


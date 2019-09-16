const themes = [
    {
        name: "小甜心",
        color1: 'salmon',
        color2: 'lightsalmon',
        color3: 'mistyrose',
        link: 'darkseagreen',
        background: 'white',
    },
    {
        name: "薄荷",
        color1: 'mediumseagreen',
        color2: 'mediumaquamarine',
        color3: 'lightsteelblue',
        link: 'burlywood',
        background: 'white',
    },
    {
        name: "深夜",
        color1: 'lightslategrey',
        color2: 'dimgrey',
        color3: 'darkslateblue',
        link: 'midnightblue',
        background: 'darkslategrey',
    }

];
let currentTheme = themes[0];
let currentThemeID = 0;

function initTheme() {
    let storedThemeID = parseInt(localStorage.getItem('currentThemeID')) ;
    console.log(storedThemeID);
    if(storedThemeID !== null) {
        currentThemeID = storedThemeID;
        currentTheme = themes[currentThemeID];
    }

}

function setTheme() {
    let els = [];
    // color1
    els = document.querySelectorAll('.bg-1');
    for(let el of els) {
        el.style.backgroundColor = currentTheme.color1;
    }
    els = document.querySelectorAll('#blog h1,#blog h2,#blog h3,#blog h4,#blog h5,#blog h6,#blog p,#blog ul,#blog ol,#blog p>code, #blog pre');
    for(let el of els) {
        el.style.color = currentTheme.color1;
    }
    els = document.querySelectorAll('#blog hr,#blog blockquote');
    for(let el of els) {
        el.style.borderColor = currentTheme.color1;
    }

    // color2
    els = document.querySelectorAll('.bg-2,.bg2-hover');
    for(let el of els) {
        el.style.backgroundColor = currentTheme.color2;
    }


    // color3
    els = document.querySelectorAll('#blog blockquote,#blog p>code, #blog pre');
    for(let el of els) {
        el.style.backgroundColor = currentTheme.color3;
    }

    // // contrast
    // els = document.querySelectorAll('.bg-3,.bg2-hover:hover');
    // for(let el of els) {
    //     el.style.backgroundColor = currentTheme.color3;
    // }

    // link
    els = document.querySelectorAll('#blog a');
    for(let el of els) {
        el.style.color = currentTheme.link;
    }

    // background
    els = document.querySelectorAll('#blog');
    for(let el of els) {
        el.style.backgroundColor = currentTheme.background;
    }
    els = document.querySelectorAll('.bg2-hover,.sidebar-header,.sidebar-footer');
    for(let el of els) {
        el.style.color = currentTheme.background;
    }


    els = document.querySelectorAll('.bg2-hover');
    for(let el of els) {
        el.addEventListener('mouseover', function() {
            el.style.backgroundColor = currentTheme.background;
            el.style.color = currentTheme.color2;
        });
        el.addEventListener('mouseout', function() {
            el.style.backgroundColor = currentTheme.color2;
            el.style.color = currentTheme.background;
        });

    }


}

function nextTheme() {
    currentThemeID += 1;
    if(currentThemeID === themes.length) currentThemeID = 0;
    localStorage.setItem('currentThemeID', currentThemeID);

    currentTheme = themes[currentThemeID];
    setTheme();
}

initTheme();
blog.addEventListener('DOMSubtreeModified', function () {
    setTheme(currentTheme);
}, false);


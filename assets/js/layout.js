const sidebar = document.querySelector('.sidebar');
const claw = document.querySelector('#claw');
// const blog = document.querySelector('#blog');

let hide = true;
let init = false;

function layout() {
    let width = document.documentElement.clientWidth ;
    let height = document.documentElement.clientHeight ;
    let portrait = height > width;

    // disable transition before adjust
    // console.log('layout called');

    if(portrait) {
        hideSidebar();
        sidebar.style.width = '100%';
        blog.style.marginLeft = '0px';
        // console.log("P:"+height);
        claw.style.bottom = `${height/2 - 32}px`;
        claw.style.display = 'block';
        if(!init) {
            init = true;
            claw.addEventListener('click', toggleSidebar);
        }

    }
    else {
        showSidebar();
        sidebar.style.width = '200px';
        blog.style.marginLeft = '200px';
        claw.style.display = 'none';

        // console.log("L:"+height);
    }

    // enable transition after adjust
    sidebar.style.transition = "linear 300ms";
    sidebar.style.display = "inline-flex";
}

function hideSidebar() {
    let width = document.body.clientWidth;
    sidebar.style.left = -width+'px';
}
function showSidebar() {
    let width = document.body.clientWidth;
    sidebar.style.left = '0px';
}

function toggleSidebar() {
    if (hide) {
        showSidebar();
    }
    else {
        hideSidebar();
    }

    hide = !hide;
}

// window.addEventListener('resize', layout);
layout();

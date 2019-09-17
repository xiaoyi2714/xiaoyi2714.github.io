// const
const blog = document.querySelector('#blog');

// tool functions
function linkInterpreter(link) {
    let vec = link.split('/');
    let name = vec[vec.length-1];
    // console.log(name);
    return `index.html?page=${name}`;
}

const checkLink = function() {
    let links = document.querySelectorAll('#blog a');
    for(let link of links) {
        if(link.href.match(/.md$/)) {
            link.href = linkInterpreter(link.href);
        }
    }
};

const highLight = function() {
    if(currentThemeID === themes.length-1) {
        // currently do not highlight on dark mode.
        return;
    }
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
};


const renderMD = function(url) {
    fetch(url)
        .then(resp=>resp.text())
        .then(res=>{
            currentMDUrl = url;

            console.log(`┌────────────────────`);
            console.log(`│ use marked.js`);
            console.log(`│ article: ${url}`);
            let start = new Date().getTime();

            blog.innerHTML = marked(res);

            let end = new Date().getTime();
            console.log(`│ parsing takes: ${(end-start)/1000} seconds`);
            console.log(`└────────────────────`);

            checkLink();
            highLight();
        });
};


// get query
const query = new URLSearchParams(window.location.search);
let page = query.get('page');
if(page === null) {
    renderMD("index.md");
} else {
    renderMD(`blog/${page}`);
}

// set listener

document.querySelector('#go-home')
    .addEventListener('click', function() {
        location.href = "index.html"
    });

document.querySelector('#go-blog')
    .addEventListener('click', function() {
        location.href = "index.html?page=blog.md"
    });

document.querySelector('#go-github')
    .addEventListener('click', function() {
        location.href = "https://github.com/guyaqi"
    });


document.querySelector('#go-qq')
    .addEventListener('click', function() {
        let qqNumber = 1360668777;
        let url1 = "http://wpa.qq.com/msgrd?v=3&uin="+qqNumber+"&site=oicqzone.com&menu=yes";
        let url2 = "mqqwpa://im/chat?chat_type=wpa&uin="+qqNumber+"&version=1&src_type=web&web_src=oicqzone.com";
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
            window.open(url2);
        }
        else {
            window.open(url1);
        }
    });

document.querySelector('#go-friends')
    .addEventListener('click', function() {
        location.href = "index.html?page=friends.md"
    });

document.querySelector('#switch-theme')
    .addEventListener('click', function() {
        // console.log("hhhhh");
        nextTheme();
    });






'use strict'

function queryDo (query, callback) {
    let el = document.querySelector(query)
    if (query!==null) {
        callback(el)
    }
}

function queryListen (query, eventName, listener) {
    queryDo(query, function(el) {
        el.addEventListener(eventName,listener)
    })
}

queryListen('#bell', 'click', ()=> {
    let url1 = "http://wpa.qq.com/msgrd?v=3&uin=1360668777&site=oicqzone.com&menu=yes";
    let url2 = "mqqwpa://im/chat?chat_type=wpa&uin=1360668777&version=1&src_type=web&web_src=oicqzone.com";
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {

        window.open(url2);
    }
    else {
        window.open(url1);
    }
})

queryListen('#bell', 'click', ()=> {
    let url1 = "http://wpa.qq.com/msgrd?v=3&uin=1360668777&site=oicqzone.com&menu=yes";
    let url2 = "mqqwpa://im/chat?chat_type=wpa&uin=1360668777&version=1&src_type=web&web_src=oicqzone.com";
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {

        window.open(url2);
    }
    else {
        window.open(url1);
    }
})

queryListen('#bell', 'mouseenter', (e)=> {
    let el = e.target
    console.log(e)
    el.style.position = 'absolute'
    el.style.top = e.clientY - 40 + 'px'
    el.style.left = e.clientX - 40 + 'px'

    window.addEventListener('mousemove', (eIn)=> {
        el.style.top = eIn.clientY - 40 + 'px'
        el.style.left = eIn.clientX - 40 + 'px'
    })
})


// #bell
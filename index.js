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

function findQQ (qqnumber) {
    let url1 = "http://wpa.qq.com/msgrd?v=3&uin="+qqnumber+"&site=oicqzone.com&menu=yes";
    let url2 = "mqqwpa://im/chat?chat_type=wpa&uin="+qqnumber+"&version=1&src_type=web&web_src=oicqzone.com";
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
        window.open(url2);
    }
    else {
        window.open(url1);
    }
}

function findMe () {
    findQQ(1360668777)
}

queryListen('#action-findMe', 'click', ()=> {
    findMe()
})

queryListen('#action-goto-Gallery', 'click', ()=> {
    window.location.href = 'gallery.html'
})
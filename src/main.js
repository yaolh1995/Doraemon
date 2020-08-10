import String from './css.js';

const player = {
    id: undefined,
    time: 30,
    a: 0,
    string: "",
    ui: {
        write: window.write,
        style: document.querySelector("style")
    },
    //执行的函数
    myWrite: () => {
        if (String[player.a] === "\n") {
            player.string += "<br>"
        } else if (String[player.a] === " ") {
            player.string += "&nbsp"
        } else {
            player.string += String[player.a]
        }
        player.a++;
        player.ui.write.innerHTML = player.string;
        player.ui.style.innerHTML = String.substring(0, player.a);
        /* scrollHeight或 write.scrollTo(0, 9999) */
        player.ui.write.scrollTop = player.ui.write.scrollHeight
        if (player.a > String.length - 1) {
            clearInterval(player.id)
        }
    },
    //hashTable： id：调用的函数
    events: {
        '#bnstop': 'pause',
        '#bnplay': 'play',
        '#bnslow': 'slow',
        '#bnfast': 'fast',
        '#bnormal': 'normal'
    },

    bindEvents: () => {
        for (let key in player.events) {
            //防御性编程
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                console.log('----')
                bn.querySelector(key).onclick = player[value]
                //player[value]
            }
        }
    },

    //初始化，play+绑定监听；
    init: () => {
        player.time = 30
        player.play()
        player.bindEvents()

    },

    pause: () => {
        clearInterval(player.id)
    },

    play: () => {
        player.pause()
        player.id = setInterval(player.myWrite, player.time)
    },

    slow: () => {
        player.time = 50
        player.play()
    },
    fast: () => {
        player.time = 0
        player.play()
    },
    normal: () => {
        player.time = 20
        player.play()
    }
}

player.init()
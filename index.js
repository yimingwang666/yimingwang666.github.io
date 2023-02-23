const engine_list = ['bing', 'google', 'baidu', 'wikipedia', 'zhihu']
const bd_list = ['bd1', 'bd2', 'bd3', 'bd4', 'bd5', 'bd6', 'bd7', 'bd8', 'bd9']
const content_list = ['content1', 'content2', 'content3', 'content4', 'content5','content6']

// 点击切换搜索引擎
function engine(engine, action, name) {
    engine.addEventListener('click', () => {
            search_box.action = action
            text.name = name
        })
}

const bing = document.getElementById('bing')
const google = document.getElementById('google')
const baidu = document.getElementById('baidu')
const wikipedia = document.getElementById('wikipedia')
const zhihu = document.getElementById('zhihu')
const search_box = document.getElementById('search_box')
const text = document.getElementById('text')

engine(bing, 'https://www.bing.com/search', 'q')
engine(google, 'https://www.google.com/search', 'q')
engine(baidu, 'https://www.baidu.com/s', 'word')
engine(wikipedia, 'https://zh.wikipedia.org/w/index.php','search')
engine(zhihu, 'https://www.zhihu.com/search', 'q')

// 切换效果
function removeActiveClass(node) {
    node.className = '';
}

let menus = document.querySelectorAll('#nav');
menus.forEach(function (value) {
    value.addEventListener('click', function (e) {
        var target = e.target;
        Array.prototype.forEach.call(document.querySelectorAll('#nav li'), removeActiveClass);
        target.className = 'active';
    })
})

//鼠标移动切换大标签栏
function changeBodyDisplay(num) {
    document.querySelector(`.bd${num}`).style.display = 'block'
    bd = bd_list.filter(function(item) {
    return item != `bd${num}`
    })
    for (let i = 0; i < bd.length; i++) {
        document.querySelector(`.${bd[i]}`).style.display = 'none'
    }
}

//鼠标移动切换小标签栏
function changeTabDisplay(num) {
    document.querySelector(`.content${num}`).style.display = 'block'
    content = content_list.filter(function(item) {
    return item!= `content${num}`
    })
    for (let i = 0; i < content.length; i++) {
        document.querySelector(`.${content[i]}`).style.display = 'none'
    }
}
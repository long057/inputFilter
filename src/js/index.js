var personArr = [
    {name: '王刚', src: './src/img/1.png', des: '颈椎不好', sex: 'm', age: 18},
    {name: '刘颖', src: './src/img/2.png', des: '我是谁', sex: 'f', age: 28},
    {name: '王秀秀', src: './src/img/3.png', des: '很好看', sex: 'f', age: 48},
    {name: '刘金', src: './src/img/4.png', des: '你没见过', sex: 'm', age: 29},
    {name: '刘飞翔', src: './src/img/0.png', des: '飞翔人生', sex: 'm', age: 34}
];

var oUl = document.getElementsByTagName('ul')[0];

store.subscribe(function () {
    renderPage(lastFilterArr(personArr));
})

function renderPage(data) {
    var temp = '';
    oUl.innerHTML = '';
    data.forEach(function (ele, index, self) {
        temp += '<li>\n' +
'                    <img src="'+ ele.src + '" alt="">\n' +
'                    <p class="name">'+ ele.name + '</p>\n' +
'                    <p class="des">' + ele.des + '</p>\n' +
'                </li>';

    })
    oUl.innerHTML = temp;
}

// input 事件
var oInput = document.getElementsByClassName('search')[0];
oInput.oninput = function () {
    store.dispatch({type: 'text', value: this.value});
}

// sex 条件筛选
var sexBtn = [].slice.call(document.getElementsByClassName('btn'));

var lastActiveBtn = sexBtn[2];
sexBtn.forEach(function (ele, index) {
    ele.onclick = function () {
        changeActive(ele);
        store.dispatch({type: 'sex', value: this.getAttribute('sex')});
    }
})

function changeActive(activeBtn) {
    activeBtn.classList.add('active');
    lastActiveBtn.classList.remove('active');
    lastActiveBtn = activeBtn;
}

// age 筛选判断
var ageInput = document.getElementsByClassName('ageWrap')[0].getElementsByTagName('input');
var ageInputArr = [].slice.call(ageInput);

ageInputArr.forEach(function (ele, index) {
    ele.oninput = function () {
        store.dispatch({type: 'age', value: this.value})
    }
})


function createStore(initialState) {
    var state = initialState || {}; // 存储各种条件的当前状态
    var list = []; // 存储所有要执行的函数
    function getState(type) { // 根据类型获取当前类型值
        return state[type];
    }

    function dispatch(action) { // 改变状态值 action { type: 'text', value: '王‘}
        state[action.type] = action.value;
        list.forEach(function (ele, index) {
            ele();
        })
    }

    function subscribe(func) {
        list.push(func);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

var store = createStore({
    text: '',
    sex: 'a',
    age: 0
})
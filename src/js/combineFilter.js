
function combineFilter(config) {

    return function (data) { // data 是一个数组
        for(var prop in config) {
            data = config[prop](data, store.getState(prop));
        }
        return data;
    }
}


var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex,
    age: filterArrByAge
})
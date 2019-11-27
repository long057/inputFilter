

function filterArrBySex(data, sex) {
    if( sex == 'a' ) {
        return data;
    }
    return data.filter(function (ele, index) {
        return ele.sex == sex;
    })
}
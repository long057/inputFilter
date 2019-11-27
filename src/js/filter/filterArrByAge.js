
function filterArrByAge(data, age) {
    var min = ageInputArr[0].value;
    var max = ageInputArr[1].value;
    if(age > max && age < min ) {
        return data;
    }
    return data.filter(function (ele, index) {
        return ele.age >= min && ele.age <= max ;
    })
}
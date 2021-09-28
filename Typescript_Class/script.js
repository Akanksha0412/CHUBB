var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _this = this;
var a = 5;
var fn = function () {
    console.log("Hello");
};
var val1 = "Hello";
var val2 = "HI";
// let res = val1 + val2;
var res = "Message is " + val1 + " = " + val2;
var _a = ["a", "b"], a1 = _a[0], a2 = _a[1];
var data = "Person 1";
var body = { data: data };
var arr1 = [3, 4, 5];
// let myArr = [1,2,arr1[0],arr1[1],arr1[2],6,7,8];
// Spread Operator
var myArr = __spreadArrays([1, 2], arr1, [6, 7, 8]);
var barr1 = [5, 6, 7];
var barr2 = __spreadArrays([2, 3, 4], barr1, [8, 9]);
var newFun = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    console.log(c); // [69,"ff",33,11]
};
newFun(10, 5, 69, "ff", 33, 11);
document.getElementById("btn").addEventListener('click', function () {
    console.log(_this); // Window
});
document.getElementById("btn").addEventListener('click', function () {
    console.log(this); // btn
});

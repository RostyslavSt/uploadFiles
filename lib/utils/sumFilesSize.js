"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function sumFilesSize(obj1, obj2) {
    var totalFileSize = 0;
    if (obj1.length > 0) {
        var arr1 = [].concat(_toConsumableArray(obj1));
        arr1.forEach(function (item) {
            totalFileSize += item.size;
        });
    }
    if (obj2.length > 0) {
        var arr2 = [].concat(_toConsumableArray(obj2));
        arr2.forEach(function (item) {
            totalFileSize += item.size;
        });
    }
    // console.log(totalFileSize);

    return totalFileSize;
}

exports.default = sumFilesSize;
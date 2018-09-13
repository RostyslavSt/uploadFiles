"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function ItemLiTemplateForLoading(url, fileName, fileSize, id) {
    var str = "<div class=\"li-item\">\n                <div class=\"image\"><img src=\"" + url + "\"></div>\n                <div class=\"file-name\">" + fileName + "</div>\n                <div class=\"progress progressBar-for-li\">\n                    <div class=\"progress-bar single\" role=\"progressbar\" ></div>\n                </div>\n                <div class=\"file-size\">" + fileSize + "<span> Kb</span></div>\n                <div class=\"buttons\">\n                    <button class=\"btn btn-primary start\" id=\"" + id + "\">\n                        <i class=\"glyphicon glyphicon-upload\"></i>\n                        <span>Start</span>\n                    </button>\n                    <button class=\"btn btn-warning cancel\">\n                        <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                        <span>Cancel</span>\n                    </button>\n                 </div>\n            </div>";

    return str;
}
exports.default = ItemLiTemplateForLoading;
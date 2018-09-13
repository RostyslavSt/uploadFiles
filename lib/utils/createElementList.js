'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ItemLiTemplateForLoading = require('../templates/ItemLiTemplateForLoading');

var _ItemLiTemplateForLoading2 = _interopRequireDefault(_ItemLiTemplateForLoading);

var _uploadFiles = require('./uploadFiles');

var _uploadFiles2 = _interopRequireDefault(_uploadFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//function for creating list of files
function createElementList(objWithFiles, rootHtmlElement, callback) {
    var filesArr = [].concat(_toConsumableArray(objWithFiles));
    //  console.log(filesArr);
    filesArr.forEach(function (item) {
        // console.log()
        var fileItem = item;
        var li = document.createElement('li');
        var reader = new FileReader();
        reader.onload = function (e) {
            var fileNameExtension = fileItem.name.split('.')[1];
            var fileImgUrl = e.target.result;

            switch (fileNameExtension) {
                case 'pdf':
                    fileImgUrl = "./img/pdf.png";
                    break;
                case 'docx':
                    fileImgUrl = "./img/word.png";
                    break;
                case 'doc':
                    fileImgUrl = "./img/word.png";
                    break;
                case 'xlsx':
                    fileImgUrl = "./img/excel.png";
                    break;
                case 'xls':
                    fileImgUrl = "./img/excel.png";
                    break;
                case 'txt':
                    fileImgUrl = "./img/text.png";
                    break;
            }

            var html = (0, _ItemLiTemplateForLoading2.default)(fileImgUrl, fileItem.name, fileItem.size, fileItem.id);
            // console.log(fileItem.id);
            li.innerHTML += html;
            rootHtmlElement.appendChild(li);

            var startUploadButton = document.getElementById(fileItem.id);
            // console.log(startButton);
            startUploadButton.addEventListener('click', function (event) {
                var progresBarSingle = startUploadButton.parentNode.parentNode.children[2].children[0];
                // console.log(progresBarSingle);
                var id = startUploadButton.getAttribute('id');
                // console.log(id);
                callback(id, progresBarSingle, startUploadButton);
            });
        };
        reader.readAsDataURL(fileItem);
    });
}

exports.default = createElementList;
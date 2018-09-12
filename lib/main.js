'use strict';

require('bootstrap');

require('bootstrap/dist/css/bootstrap.css');

require('../style/style.css');

var _createElementList = require('../utils/createElementList');

var _createElementList2 = _interopRequireDefault(_createElementList);

var _uploadFiles = require('../utils/uploadFiles');

var _uploadFiles2 = _interopRequireDefault(_uploadFiles);

var _uploadSingleFile = require('../utils/uploadSingleFile');

var _uploadSingleFile2 = _interopRequireDefault(_uploadSingleFile);

var _sumFilesSize = require('../utils/sumFilesSize');

var _sumFilesSize2 = _interopRequireDefault(_sumFilesSize);

var _mainHtmlBodyTemplate = require('../templates/mainHtmlBodyTemplate');

var _mainHtmlBodyTemplate2 = _interopRequireDefault(_mainHtmlBodyTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function main(idRootElement) {
var uniqid = require('uniqid');

//render
// const rootElementforRendering = document.getElementById(idRootElement);
// let mainHtmlBody = mainHtmlBodyTemplate();
// rootElementforRendering.innerHTML = mainHtmlBody;

var form = document.querySelector('form');
var fileContainer = document.querySelector("#selectedFiles");
var ul = document.createElement('ul');
var progressBarMain = document.querySelector('.progress-bar');

var totalFileSize = 0;
var filesSizePushToServer = 0;

fileContainer.appendChild(ul);

var filesFromInputTag = {};
var filesFromDrugAndDrop = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
    form.addEventListener('change', handleFileSelect);
}

function handleFileSelect(e) {
    if (!e.target.files || !window.FileReader) return;
    for (var i = 0; i < e.target.files.length; i++) {
        e.target.files[i].id = uniqid();
    }

    filesFromInputTag = e.target.files;
    // console.log(e.target.files);
    totalFileSize = (0, _sumFilesSize2.default)(filesFromInputTag, filesFromDrugAndDrop);

    (0, _createElementList2.default)(e.target.files, ul, findSingleFile);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var singleProgressBarAllArray = document.querySelectorAll('.single');
    //upload files
    (0, _uploadFiles2.default)(filesFromInputTag, filesFromDrugAndDrop, progressBarMain, singleProgressBarAllArray);
});

// drug and drop 
// -----
var dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, preventDefaults);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
dropArea.addEventListener('drop', function (e) {
    var dt = e.dataTransfer;
    // console.log(dt.files);
    for (var i = 0; i < dt.files.length; i++) {
        dt.files[i].id = uniqid();
    }
    filesFromDrugAndDrop = dt.files;

    totalFileSize = (0, _sumFilesSize2.default)(filesFromInputTag, filesFromDrugAndDrop);
    // console.log(dt.files)
    (0, _createElementList2.default)(filesFromDrugAndDrop, ul, findSingleFile);
});

// ----------

//find single file
function findSingleFile(fileID, progressBarSingle, startUploadButton) {
    for (var i = 0; i < filesFromInputTag.length; i++) {
        if (fileID === filesFromInputTag[i].id) {
            filesSizePushToServer += filesFromInputTag[i].size;
            (0, _uploadSingleFile2.default)(filesFromInputTag[i], progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton);
        }
    }

    for (var _i = 0; _i < filesFromDrugAndDrop.length; _i++) {
        if (fileID === filesFromDrugAndDrop[_i].id) {
            filesSizePushToServer += filesFromDrugAndDrop[_i].size;
            (0, _uploadSingleFile2.default)(filesFromDrugAndDrop[_i], progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton);
        }
    }
}

// }

// export default main;
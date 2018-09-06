import createElementList from '../utils/createElementList';
// import implementDrugAndDrop from '../utils/drugAndDrop';
import uploadFiles from '../utils/uploadFiles';
import uploadSingleFile from '../utils/uploadSingleFile';

let uniqid = require('uniqid');

const form = document.querySelector('form');
// const inputButton = document.querySelector('#upload-input');
// const chooseFilesButton = document.querySelector('#choose-input');
const fileContainer = document.querySelector("#selectedFiles");
const ul = document.createElement('ul');
const progressBar = document.querySelector('.progress-bar');

fileContainer.appendChild(ul);

let filesFromInputTag = {};
let filesFromDrugAndDrop = {};


document.addEventListener("DOMContentLoaded", init);

function init() {
    form.addEventListener('change', handleFileSelect);
}

function handleFileSelect(e) {
    if (!e.target.files || !window.FileReader) return;
    for (let i = 0; i < e.target.files.length; i++) {
        e.target.files[i].id = uniqid();
    }

    filesFromInputTag = e.target.files;
    // console.log(e.target.files);
    createElementList(e.target.files, ul, findSingleFile);
}

//drag and drop
function getFilesFromDrugAndDrop(dataWithFiles) {
    filesFromDrugAndDrop = dataWithFiles;
}
// implementDrugAndDrop(ul, getFilesFromDrugAndDrop);
// console.log(filesFromDrugAndDrop);


form.addEventListener('submit', e => {
    e.preventDefault();
    //upload files
    uploadFiles(filesFromInputTag, filesFromDrugAndDrop, progressBar);
});



// drug and drop -----
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
dropArea.addEventListener('drop', e => {
    let dt = e.dataTransfer;
    console.log(dt.files);
    for (let i = 0; i < dt.files.length; i++) {
        dt.files[i].id = uniqid();
    }
    filesFromDrugAndDrop = dt.files;

    // funcForGetFiles(dt.files);
    console.log(dt.files)
    createElementList(filesFromDrugAndDrop, ul, findSingleFile);
});

// ----------

//find single file
function findSingleFile(fileID, progressBarSingle) {
    console.log('step 1')
    for (let i = 0; i < filesFromInputTag.length; i++) {
        if (fileID === filesFromInputTag[i].id) {
            uploadSingleFile(filesFromInputTag[i], progressBarSingle);
        }
    }

    console.log(filesFromDrugAndDrop);
    for (let i = 0; i < filesFromDrugAndDrop.length; i++) {
        if (fileID === filesFromDrugAndDrop[i].id) {
            uploadSingleFile(filesFromDrugAndDrop[i], progressBarSingle);
        }
    }
}


// progress;
// let filesDone = 0;
// let filesToDo = 0;

// function initializeProgress(numfiles) {
//     progressBar.value = 0
//     filesDone = 0
//     filesToDo = numfiles
// }

// function progressDone() {
//     filesDone++;
//     progressBar.value = filesDone / filesToDo * 100
// }
// let progressBar = document.getElementById('progress-bar');


// function handleFiles(files) {
//     files = [...files];
//     initializeProgress(files.length);
//     files.forEach(uploadFile);
// }

// function previewFile(file) {
//   let reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onloadend = function() {
//     let img = document.createElement('img')
//     img.src = reader.result
//     document.getElementById('gallery').appendChild(img)
//   }
// }
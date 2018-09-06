import createElementList from '../utils/createElementList';
import implementDrugAndDrop from '../utils/drugAndDrop';
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
implementDrugAndDrop(ul, getFilesFromDrugAndDrop);
// console.log(filesFromDrugAndDrop);


form.addEventListener('submit', e => {
    e.preventDefault();
    //upload files
    uploadFiles(filesFromInputTag, filesFromDrugAndDrop, progressBar);
});

function findSingleFile(fileID, progressBarSingle) {
    for (let i = 0; i < filesFromInputTag.length; i++) {
        if (fileID === filesFromInputTag[i].id) {
            console.log(filesFromInputTag[i].id);
            uploadSingleFile(filesFromInputTag[i], progressBarSingle);
        }
    }

    for (let i = 0; i < filesFromDrugAndDrop.length; i++) {
        if (fileID === filesFromDrugAndDrop[i].id) {
            console.log('888888');
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
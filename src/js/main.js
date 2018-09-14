// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import '../style/style.css';


import createElementList from '../utils/createElementList';
import uploadFiles from '../utils/uploadFiles';
import uploadSingleFile from '../utils/uploadSingleFile';
import sumFilesSize from '../utils/sumFilesSize';
import mainHtmlBodyTemplate from '../templates/mainHtmlBodyTemplate';

function main(idRootElement) {
    let uniqid = require('uniqid');

    //render main template with form anb buttons;
    let mainHtmlBody = mainHtmlBodyTemplate();
    rootElementforRendering.innerHTML = mainHtmlBody;

    const form = document.querySelector('form');
    const fileContainer = document.querySelector("#selectedFiles");
    const ul = document.createElement('ul');
    const progressBarMain = document.querySelector('.progress-bar');

    let totalFileSize = 0;
    let filesSizePushToServer = 0;

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
        totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);

        createElementList(e.target.files, ul, findSingleFile);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        let singleProgressBarAllArray = document.querySelectorAll('.single');
        //upload files
        uploadFiles(filesFromInputTag, filesFromDrugAndDrop, progressBarMain, singleProgressBarAllArray);
    });

    // drug and drop 
    // -----
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
        // console.log(dt.files);
        for (let i = 0; i < dt.files.length; i++) {
            dt.files[i].id = uniqid();
        }
        filesFromDrugAndDrop = dt.files;

        totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);
        // console.log(dt.files)
        createElementList(filesFromDrugAndDrop, ul, findSingleFile);
    });

    // ----------

    //find single file
    function findSingleFile(fileID, progressBarSingle, startUploadButton) {
        for (let i = 0; i < filesFromInputTag.length; i++) {
            if (fileID === filesFromInputTag[i].id) {
                filesSizePushToServer += filesFromInputTag[i].size;
                uploadSingleFile(filesFromInputTag[i], progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton);
            }
        }

        for (let i = 0; i < filesFromDrugAndDrop.length; i++) {
            if (fileID === filesFromDrugAndDrop[i].id) {
                filesSizePushToServer += filesFromDrugAndDrop[i].size;
                uploadSingleFile(filesFromDrugAndDrop[i], progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton);
            }
        }
    }

}

export default main;
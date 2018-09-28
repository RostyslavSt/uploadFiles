// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import '../style/style.css';
import createElementList from '../utils/createElementList';
import uploadFiles from '../utils/uploadFiles';
import uploadSingleFile from '../utils/uploadSingleFile';
import sumFilesSize from '../utils/sumFilesSize';
import mainHtmlBodyTemplate from '../templates/mainHtmlBodyTemplate';

const uniqid = require('uniqid');

function main(idRootElement, serverUrl) {
  const idRootElementItem = idRootElement;
  // render main template with form and buttons;
  const mainHtmlBody = mainHtmlBodyTemplate();
  idRootElementItem.innerHTML = mainHtmlBody;
  // let serverUrl = 'http://localhost:3002/upload';

  const form = document.querySelector('form');
  const fileContainer = document.querySelector('#selectedFiles');
  const ul = document.createElement('ul');
  const progressBarMain = document.querySelector('.progress-bar');

  let totalFileSize = 0;
  let filesSizePushToServer = 0;

  fileContainer.appendChild(ul);

  let filesFromInputTag = {};
  let filesFromDrugAndDrop = {};
  let formData = new window.FormData();

  document.addEventListener('DOMContentLoaded', init);
  function handleFileSelect(e) {
    if (!e.target.files || !window.FileReader) {
      return;
    }

    for (let i = 0; i < e.target.files.length; i += 1) {
      e.target.files[i].id = uniqid();
    }

    filesFromInputTag = e.target.files;
    // console.log(e.target.files);
    totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);

    createElementList(e.target.files, ul, findSingleFile, deleteFilesFromFormData);
    formData = createFormDataForUploading(filesFromInputTag, filesFromDrugAndDrop);
  }

  function init() {
    form.addEventListener('change', handleFileSelect);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const singleProgressBarAllArray = document.querySelectorAll('.single');
    // upload files
    // formData = createFormDataForUploading(filesFromInputTag, filesFromDrugAndDrop);
    uploadFiles(progressBarMain, singleProgressBarAllArray, serverUrl, formData);
  });

  // drug and drop
  // -----
  const dropArea = document.getElementById('drop-area');
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
    dropArea.addEventListener(eventName, preventDefaults);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  dropArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    // console.log(dt.files);
    for (let i = 0; i < dt.files.length; i += 1) {
      dt.files[i].id = uniqid();
    }
    filesFromDrugAndDrop = dt.files;

    totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);
    // console.log(dt.files)
    createElementList(filesFromDrugAndDrop, ul, findSingleFile);
  });

  // ----------

  // find single file
  function findSingleFile(fileID, progressBarSingle, startUploadButton) {
    for (let i = 0; i < filesFromInputTag.length; i += 1) {
      if (fileID === filesFromInputTag[i].id) {
        filesSizePushToServer += filesFromInputTag[i].size;
        uploadSingleFile(filesFromInputTag[i], progressBarSingle, progressBarMain, totalFileSize,
          filesSizePushToServer, startUploadButton, serverUrl);
      }
    }

    for (let i = 0; i < filesFromDrugAndDrop.length; i += 1) {
      if (fileID === filesFromDrugAndDrop[i].id) {
        filesSizePushToServer += filesFromDrugAndDrop[i].size;
        uploadSingleFile(filesFromDrugAndDrop[i], progressBarSingle, progressBarMain, totalFileSize,
          filesSizePushToServer, startUploadButton, serverUrl);
      }
    }
  }

  function deleteFilesFromFormData(elementId) {
    formData.forEach((fileObj, key) => {
      console.log(key);
      if (key === elementId) {
        formData.delete(key);
        console.log('we ve done it');
      }
    });

    console.log('--------------');
    formData.forEach((fileObj, key) => {
      console.log(key);
      console.log(fileObj);
    });
  }

  function createFormDataForUploading(filesInput, filesDrugAndDrop) {
    // const formData = new window.FormData();
    if (filesInput.length > 0) {
      // loop through all the selected files and add them to the formData object
      for (let i = 0; i < filesInput.length; i += 1) {
        const file = filesInput[i];
        // add the files to formData object for the data payload
        formData.append(file.id, file, file.name);
      }
    }
    if (filesDrugAndDrop.length > 0) {
      for (let i = 0; i < filesDrugAndDrop.length; i += 1) {
        const file = filesDrugAndDrop[i];
        // add the files to formData object for the data payload
        formData.append(file.id, file, file.name);
      }
    }
    // removeFromUploads('jmlpn6tn');
    return formData;
  }
}

export default main;

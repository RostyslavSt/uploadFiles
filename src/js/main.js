import '../style/style.css';
import createElementList from '../utils/createElementList';
import uploadFiles from '../utils/uploadFiles';
import uploadSingleFile from '../utils/uploadSingleFile';
import sumFilesSize from '../utils/sumFilesSize';
import createFormDataForUploading from '../utils/createFormDataForUploading';
import mainHtmlBodyTemplate from '../templates/mainHtmlBodyTemplate';

const uniqid = require('uniqid');

function main(idRootElement, serverUrl) {
  const idRootElementItem = idRootElement;
  // render main template with form and buttons;
  const mainHtmlBody = mainHtmlBodyTemplate();
  idRootElementItem.innerHTML = mainHtmlBody;
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
    totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);

    createElementList(e.target.files, ul, findSingleFile, deleteFilesFromFormData);
    formData = createFormDataForUploading(filesFromInputTag, filesFromDrugAndDrop, formData);
  }

  function init() {
    form.addEventListener('change', handleFileSelect);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const singleProgressBarAllArray = document.querySelectorAll('.single');
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
    for (let i = 0; i < dt.files.length; i += 1) {
      dt.files[i].id = uniqid();
    }
    filesFromDrugAndDrop = dt.files;

    totalFileSize = sumFilesSize(filesFromInputTag, filesFromDrugAndDrop);
    createElementList(filesFromDrugAndDrop, ul, findSingleFile, deleteFilesFromFormData);
    formData = createFormDataForUploading(filesFromInputTag, filesFromDrugAndDrop, formData);
  });

  // ----------

  // find single file
  function findSingleFile(fileID, progressBarSingle, startUploadButton) {
    formData.forEach((fileObj, key) => {
      if (fileID === key) {
        filesSizePushToServer += fileObj.size;
        uploadSingleFile(fileObj, progressBarSingle, progressBarMain, totalFileSize,
          filesSizePushToServer, startUploadButton, serverUrl);
      }
    });
  }

  // delete files from formData
  function deleteFilesFromFormData(elementId) {
    formData.forEach((fileObj, key) => {
      if (key === elementId) {
        formData.delete(key);
      }
    });
  }
}

export default main;

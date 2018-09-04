// import imgTemplate from '../utils/imgTemplate';

const form = document.querySelector('form');
const fileContainer = document.querySelector("#selectedFiles");
// const progressBar = document.querySelector("#progress-bar");
// const uploadButton = document.querySelector("#upload");

let filefForServer = {a: "wqq"}
let ul = document.createElement('ul');
fileContainer.appendChild(ul);

document.addEventListener("DOMContentLoaded", init);

function init() {
    form.addEventListener('change', handleFileSelect);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // let formData = new FormData(form);
    // console.dir(formData);
    uploadFile(form);

});

function handleFileSelect(e) {
    if (!e.target.files || !window.FileReader) return;

    filefForServer = e.target.files;
    console.log(e.target.files);
    createElementList(e.target.files, ul);
}

//drag and drop
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('drop', function (e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    createElementList(files, ul);
});


//function for creating list of files
function createElementList(objWithFiles, rootHtmlElement) {
    let filesArr = [...objWithFiles];
    filesArr.forEach(item => {
        let fileItem = item;
        let li = document.createElement('li');
        let reader = new FileReader();
        reader.onload = function (e) {
            let fileNameExtension = fileItem.name.split('.')[1];
            let fileImgUrl = e.target.result

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

            let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
            // let html = imgTemplate(fileImgUrl, fileItem.name);
            li.innerHTML += html;
            rootHtmlElement.appendChild(li);
        }
        reader.readAsDataURL(fileItem);
    });
}

//upoload

function uploadFile(file) {
    // console.log(form);
    let url = 'http://localhost:3002/upload';
    let formData = new FormData(file);
    formData.append('upfile', {});
    // formData.append("test", "wv24r4r2r2r23r2r");

    fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(() => {
            // progressDone();
            console.log("files are uploaded");
        })
        .catch((error) => {
            console.log(error)
        })
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


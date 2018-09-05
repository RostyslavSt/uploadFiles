// import imgTemplate from '../utils/imgTemplate';

const form = document.querySelector('form');
const inputButton = document.querySelector('#upload-input');
const chooseFilesButton = document.querySelector('#choose-input');
const fileContainer = document.querySelector("#selectedFiles");
const ul = document.createElement('ul');
const progressBar = document.querySelector('.progress-bar');

fileContainer.appendChild(ul);

let filesFromInputTag = {}
let filesFromDrugAndDrop = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
    form.addEventListener('change', handleFileSelect);
}

function handleFileSelect(e) {
    if (!e.target.files || !window.FileReader) return;

    filesFromInputTag = e.target.files;
    console.log(e.target.files);
    createElementList(e.target.files, ul);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // let formData = new FormData(form);
    // console.dir(formData);
    uploadFile(filesFromInputTag, filesFromDrugAndDrop);

});


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
    filesFromDrugAndDrop = dt.files;
    createElementList(filesFromDrugAndDrop, ul);
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

function uploadFile(files, filesFromDrugAndDrop) {
    console.log(files);
    console.log(filesFromDrugAndDrop);
    let url = 'http://localhost:3002/upload';
    // let formData = new FormData(file);
    // formData.append('upfile', {});

    let formData = new FormData();
    if (files.length > 0) {
        // loop through all the selected files and add them to the formData object
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
        }
    }
    if (filesFromDrugAndDrop.length > 0) {
        for (let i = 0; i < filesFromDrugAndDrop.length; i++) {
            let file = filesFromDrugAndDrop[i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
        }
    }



    $.ajax({
        url: 'http://localhost:3002/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log('upload successful!\n' + data);
        },
        xhr: function () {
            // create an XMLHttpRequest
            var xhr = new XMLHttpRequest();

            // listen to the 'progress' event
            xhr.upload.addEventListener('progress', function (evt) {
                
                if (evt.lengthComputable) {
                    // calculate the percentage of upload completed
                 

                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    console.log(percentComplete);

                    // update the Bootstrap progress bar with the new percentage

                    progressBar.setAttribute("style", `width: ${percentComplete}%`);
                    progressBar.innerHTML = `${percentComplete} %`;
                  
                    // once the upload reaches 100%, set the progress bar text to done
                    if (percentComplete === 100) {
                        progressBar.innerHTML = "Done";
                    }
                }

            }, false);

            return xhr;
        }
    });




    // fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(() => {
    //         // progressDone();
    //         console.log("files are uploaded");
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
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
// import imgTemplate from '../utils/imgTemplate';

const form = document.querySelector('form');

document.addEventListener("DOMContentLoaded", init, false);

let ul = document.createElement('ul');

function init() {
    form.addEventListener('change', handleFileSelect, false);
    fileContainer = document.querySelector("#selectedFiles");
}
function handleFileSelect(e) {
    if(!e.target.files || !window.FileReader) return;
    let filesArr = [...e.target.files];
    console.dir(e.target.files);
   
    fileContainer.appendChild(ul);
    filesArr.forEach(item => {
        let fileItem = item;
        let li = document.createElement('li');
        var reader = new FileReader();
        reader.onload = function (e) {
            let fileNameExtension = fileItem.name.split('.')[1];
            let fileImgUrl = e.target.result

            switch(fileNameExtension) {
                case 'pdf': fileImgUrl = "./img/pdf.png";
                    break;
                case 'docx' : fileImgUrl = "./img/word.png";
                    break;
                case 'doc' : fileImgUrl = "./img/word.png";
                    break;
                case 'xlsx' : fileImgUrl = "./img/excel.png";
                    break;
                case 'xls' : fileImgUrl = "./img/excel.png";
                    break;
                case 'txt': fileImgUrl = "./img/text.png";
                    break;
            }

            let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
            // let html = imgTemplate(fileImgUrl, fileItem.name);
            li.innerHTML += html;
            ul.appendChild(li);
		}
        reader.readAsDataURL(fileItem); 
    })
}

let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}

dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFiles(files)
}

function handleFiles(files) {
    console.log("drop");
    console.log([...files]);
    let filesArr = [...files];

    filesArr.forEach(item => {
        let fileItem = item;
        let li = document.createElement('li');
        var reader = new FileReader();
        reader.onload = function (e) {
            let fileNameExtension = fileItem.name.split('.')[1];
            let fileImgUrl = e.target.result

            switch(fileNameExtension) {
                case 'pdf': fileImgUrl = "./img/pdf.png";
                    break;
                case 'docx' : fileImgUrl = "./img/word.png";
                    break;
                case 'doc' : fileImgUrl = "./img/word.png";
                    break;
                case 'xlsx' : fileImgUrl = "./img/excel.png";
                    break;
                case 'xls' : fileImgUrl = "./img/excel.png";
                    break;
                case 'txt': fileImgUrl = "./img/text.png";
                    break;
            }

            let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
            // let html = imgTemplate(fileImgUrl, fileItem.name);
            li.innerHTML += html;
            ul.appendChild(li);
		}
        reader.readAsDataURL(fileItem); 
    })




}




// import imgTemplate from '../utils/imgTemplate';

const form = document.querySelector('form');
const fileContainer = document.querySelector("#selectedFiles");

let ul = document.createElement('ul');
fileContainer.appendChild(ul);

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log('wswswsw')
    form.addEventListener('change', handleFileSelect);
    
}
function handleFileSelect(e) {
    if(!e.target.files || !window.FileReader) return;
    let filesArr = [...e.target.files];
    console.dir(e.target.files);
       
    filesArr.forEach(item => {
        let fileItem = item;
        let li = document.createElement('li');
        let reader = new FileReader();
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

//drag and drop
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults);
  });

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('drop', function(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    createElementList(files);
    // handleFiles(files);
});
// function handleDrop(e) {
//   let dt = e.dataTransfer;
//   let files = dt.files;
//   handleFiles(files);
// }

// function handleFiles(files) {
//     console.log("drop");
//     console.log([...files]);
//     let filesArr = [...files];

//     filesArr.forEach(item => {
//         let fileItem = item;
//         let li = document.createElement('li');
//         let reader = new FileReader();
//         reader.onload = function (e) {
//             let fileNameExtension = fileItem.name.split('.')[1];
//             let fileImgUrl = e.target.result

//             switch(fileNameExtension) {
//                 case 'pdf': fileImgUrl = "./img/pdf.png";
//                     break;
//                 case 'docx' : fileImgUrl = "./img/word.png";
//                     break;
//                 case 'doc' : fileImgUrl = "./img/word.png";
//                     break;
//                 case 'xlsx' : fileImgUrl = "./img/excel.png";
//                     break;
//                 case 'xls' : fileImgUrl = "./img/excel.png";
//                     break;
//                 case 'txt': fileImgUrl = "./img/text.png";
//                     break;
//             }

//             let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
//             // let html = imgTemplate(fileImgUrl, fileItem.name);
//             li.innerHTML += html;
//             ul.appendChild(li);
// 		}
//         reader.readAsDataURL(fileItem); 
//     })
// }

//function for creating list of files
function createElementList(objWithFiles) {
    let filesArr = [...objWithFiles];
    filesArr.forEach(item => {
        let fileItem = item;
        let li = document.createElement('li');
        let reader = new FileReader();
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
    });
}



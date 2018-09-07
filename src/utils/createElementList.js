import ItemLiTemplateForLoading from '../templates/ItemLiTemplateForLoading';
import uploadFiles from './uploadFiles';

//function for creating list of files
function createElementList(objWithFiles, rootHtmlElement, callback) {
    let filesArr = [...objWithFiles];
    //  console.log(filesArr);
    filesArr.forEach(item => {
        // console.log()
        let fileItem = item;
        let li = document.createElement('li');
        let reader = new FileReader();
        reader.onload = e => {
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

            // let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
            let html = ItemLiTemplateForLoading(fileImgUrl, fileItem.name, fileItem.size, fileItem.id);
            // console.log(fileItem.id);
            li.innerHTML += html;
            rootHtmlElement.appendChild(li);
            
            let startUploadButton = document.getElementById(fileItem.id);
            // console.log(startButton);
            startUploadButton.addEventListener('click', event => {
                let progresBarSingle = startUploadButton.parentNode.parentNode.children[2].children[0];
                // console.log(progresBarSingle);
                let id = startUploadButton.getAttribute('id');
                // console.log(id);
                callback(id, progresBarSingle, startUploadButton);
            });

        }
        reader.readAsDataURL(fileItem);
    });
}

export default createElementList;
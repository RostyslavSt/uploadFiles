import ItemLiTemplateForLoading from '../templates/ItemLiTemplateForLoading';
import uploadFiles from './uploadFiles';

//function for creating list of files
function createElementList(objWithFiles, rootHtmlElement, callback) {
    let pathToImgFile = "../src/img/"
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
                    fileImgUrl = pathToImgFile + "pdf.png";
                    break;
                case 'docx':
                    fileImgUrl = pathToImgFile + "word.png";
                    break;
                case 'doc':
                    fileImgUrl = pathToImgFile + "word.png";
                    break;
                case 'xlsx':
                    fileImgUrl = pathToImgFile + "excel.png";
                    break;
                case 'xls':
                    fileImgUrl = pathToImgFile + "excel.png";
                    break;
                case 'txt':
                    fileImgUrl = pathToImgFile + "text.png";
                    break;
            }

          
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
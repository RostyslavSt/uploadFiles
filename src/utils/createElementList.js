import imgTemplate from './imgTemplate';

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

            // let html = `<img src="${fileImgUrl}"> <span>${fileItem.name}</span>`;
            let html = imgTemplate(fileImgUrl, fileItem.name);
            li.innerHTML += html;
            rootHtmlElement.appendChild(li);
        }
        reader.readAsDataURL(fileItem);
    });
}

export default createElementList;
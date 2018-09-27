import ItemLiTemplateForLoading from '../templates/ItemLiTemplateForLoading';
import findImgForFile from './findImgForFile';
import imgUnknownFile from '../img/unknown-file.png';

// function for creating list of files
function createElementList(objWithFiles, rootHtmlElement, callback) {
  // let pathToImgFile = "../src/img/"
  const filesArr = [...objWithFiles];
  //  console.log(filesArr);
  filesArr.forEach((item) => {
    // console.log()
    const fileItem = item;
    const li = document.createElement('li');
    const reader = new window.FileReader();
    reader.onload = (e) => {
      const fileNameExtension = fileItem.name.split('.')[1];
      let fileImgUrl = e.target.result;

      // find icon for file
      fileImgUrl = findImgForFile(fileImgUrl, fileNameExtension);

      const html = ItemLiTemplateForLoading(fileImgUrl, fileItem.name, fileItem.size, fileItem.id);
      const testBlock = document.createElement('img');
      testBlock.src = imgUnknownFile;
      console.log(testBlock);
      li.innerHTML = html;
      li.appendChild(testBlock);
      rootHtmlElement.appendChild(li);

      const startUploadButton = document.getElementById(fileItem.id);

      startUploadButton.addEventListener('click', () => {
        const progresBarSingle = startUploadButton.parentNode.parentNode.children[2].children[0];
        // console.log(progresBarSingle);
        const id = startUploadButton.getAttribute('id');
        // console.log(id);
        callback(id, progresBarSingle, startUploadButton);
      });
    };
    reader.readAsDataURL(fileItem);
  });
}

export default createElementList;

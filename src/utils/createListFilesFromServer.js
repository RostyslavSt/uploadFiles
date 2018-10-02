import itemTemplateFileFromServer from '../templates/itemTemplateFileFromServer';
import findImgForFile from './findImgForFile';
// import imgUnknownFile from '../img/unknown-file.png';

// function for creating list of files
function createListFilesFromServer(objWithFiles, rootHtmlElement, callback, callbackForStore) {
  const filesArr = [...objWithFiles];
  filesArr.forEach((item) => {
    const li = document.createElement('li');
    const fileNameExtension = item.name.split('.')[1];
    let fileImgUrl = item.path;

    // find icon for file
    fileImgUrl = findImgForFile(fileImgUrl, fileNameExtension);

    const html = itemTemplateFileFromServer(fileImgUrl, item.name, item.size, fileItem.id);
    li.innerHTML = html;
    rootHtmlElement.appendChild(li);

    const startUploadButton = document.getElementById(fileItem.id);

    startUploadButton.addEventListener('click', () => {
      const progresBarSingle = startUploadButton.parentNode.parentNode.children[2].children[0];
      const id = startUploadButton.getAttribute('id');
      callback(id, progresBarSingle, startUploadButton);
    });

    const cancelButton = startUploadButton.nextElementSibling;
    cancelButton.addEventListener('click', () => {
      const idElement = cancelButton.previousElementSibling.getAttribute('id');
      callbackForStore(idElement);
      cancelButton.parentNode.parentNode.parentNode.remove();
    });
  });
}

export default createListFilesFromServer;

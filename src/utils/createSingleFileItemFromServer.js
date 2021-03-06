import itemTemplateFileFromServer from '../templates/itemTemplateFileFromServer';
import findImgForFile from './findImgForFile';
// import imgUnknownFile from '../img/unknown-file.png';

// function for creating list of files
function createSingleFileItemFromServer(rootHtmlElement, objWithFiles, fileID) {
  const liElement = document.getElementById(fileID);
  console.log(liElement.parentNode.parentNode.parentNode);
  liElement.parentNode.parentNode.parentNode.remove();
  // console.log(liElement.parentNode.parentNode.parentNode);
  // ul.innerHTML = '';
  const filesArr = [...objWithFiles];
  filesArr.forEach((item) => {
    const li = document.createElement('li');
    const fileNameExtension = item.name.split('.')[1];
    let fileImgUrl = item.path;

    // find icon for file
    fileImgUrl = findImgForFile(fileImgUrl, fileNameExtension);

    const html = itemTemplateFileFromServer(fileImgUrl, item.name, item.size, item.id);
    li.innerHTML = html;
    rootHtmlElement.appendChild(li);

    const deleteButton = document.getElementById(item.id);

    deleteButton.addEventListener('click', () => {
      console.log('item id', item.id);
      // const progresBarSingle = deleteButton.parentNode.parentNode.children[2].children[0];
      // const id = deleteButton.getAttribute('id');
      // callback(id, progresBarSingle, deleteButton);
    });

    // const cancelButton = startUploadButton.nextElementSibling;
    // cancelButton.addEventListener('click', () => {
    //   const idElement = cancelButton.previousElementSibling.getAttribute('id');
    //   callbackForStore(idElement);
    //   cancelButton.parentNode.parentNode.parentNode.remove();
    // });
  });
}

export default createSingleFileItemFromServer;

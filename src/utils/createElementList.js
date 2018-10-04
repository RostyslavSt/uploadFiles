import ItemLiTemplateForLoading from '../templates/ItemLiTemplateForLoading';
import findImgForFile from './findImgForFile';
// import imgUnknownFile from '../img/unknown-file.png';

// function for creating list of files
function createElementList(objWithFiles, rootHtmlElement, findSingleFile, deleteFilesFromFormData) {
  const filesArr = [...objWithFiles];
  filesArr.forEach((item) => {
    const fileItem = item;
    const li = document.createElement('li');
    const reader = new window.FileReader();
    reader.onload = (e) => {
      const fileNameExtension = fileItem.name.split('.')[1];
      let fileImgUrl = e.target.result;

      // find icon for file
      fileImgUrl = findImgForFile(fileImgUrl, fileNameExtension);

      const html = ItemLiTemplateForLoading(fileImgUrl, fileItem.name, fileItem.size, fileItem.id);
      li.innerHTML = html;
      rootHtmlElement.appendChild(li);

      const startUploadButton = document.getElementById(fileItem.id);

      startUploadButton.addEventListener('click', () => {
        const progresBarSingle = startUploadButton.parentNode.parentNode.children[2].children[0];
        const id = startUploadButton.getAttribute('id');
        findSingleFile(id, progresBarSingle, startUploadButton);
      });

      const cancelButton = startUploadButton.nextElementSibling;
      cancelButton.addEventListener('click', () => {
        const idElement = cancelButton.previousElementSibling.getAttribute('id');
        deleteFilesFromFormData(idElement);
        cancelButton.parentNode.parentNode.parentNode.remove();
      });
    };
    reader.readAsDataURL(fileItem);
  });
}

export default createElementList;

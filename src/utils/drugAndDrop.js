import createElementList from './createElementList';

//drag and drop
function implementDrugAndDrop(ul, funcForGetFiles) {
 
    let dropArea = document.getElementById('drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    dropArea.addEventListener('drop',  e => {
        let dt = e.dataTransfer;
        let filesFromDrugAndDrop = dt.files;
        funcForGetFiles(dt.files);
        createElementList(filesFromDrugAndDrop, ul);
    });
}

export default implementDrugAndDrop;
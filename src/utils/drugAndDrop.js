import createElementList from './createElementList';

let uniqid = require('uniqid');

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
        console.log(dt.files);
        for (let i = 0; i <  dt.files.length; i++) {
            dt.files[i].id = uniqid();
        }
        let filesFromDrugAndDrop = dt.files;
       
        funcForGetFiles(dt.files);
        console.log(dt.files)
        createElementList(filesFromDrugAndDrop, ul);
    });
}

export default implementDrugAndDrop;
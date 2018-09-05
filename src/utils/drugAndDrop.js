import createElementList from './createElementList';

//drag and drop
function implementDrugAndDrop(ul, funcForGetFiles) {
    // let filesFromDrugAndDrop = {};

    let dropArea = document.getElementById('drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    // function func(filesFrom) {
    //     filesFromDrugAndDrop = filesFrom;
    // }

    dropArea.addEventListener('drop',  e => {
        let dt = e.dataTransfer;
        let filesFromDrugAndDrop = dt.files;
        // console.log(filesFromDrugAndDrop);
        funcForGetFiles(dt.files);
        createElementList(filesFromDrugAndDrop, ul);
    });

    // console.log(filesFromDrugAndDrop);
}

export default implementDrugAndDrop;
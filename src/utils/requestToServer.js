//upload
function uploadFiles(files, filesFromDrugAndDrop, progressBarTag, singleProgressBarArr) {
    // console.log(files);
    // console.log(filesFromDrugAndDrop);
    let url = 'http://localhost:3002/upload';
    let url2 = 'http://localhost:3002/test_post';
    let allStartUploadButons = document.querySelectorAll('.start');

    let formData = new FormData();

    if (files.length > 0) {
        // loop through all the selected files and add them to the formData object
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
        }
    }
    if (filesFromDrugAndDrop.length > 0) {
        for (let i = 0; i < filesFromDrugAndDrop.length; i++) {
            let file = filesFromDrugAndDrop[i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {

            // calculate the percentage of upload completed
            let percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
            
            // update the Bootstrap progress bar with the new percentage
            progressBarTag.setAttribute("style", `width: ${percentComplete}%`);
            progressBarTag.innerHTML = `${percentComplete} %`;

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
                progressBarTag.innerHTML = "Done";
            }

            singleProgressBarArr.forEach(elem => {
                elem.setAttribute("style", `width: ${percentComplete}%`);
                elem.innerHTML = `${percentComplete} %`;

                // once the upload reaches 100%, set the progress bar text to done
                if (percentComplete === 100) {
                    elem.innerHTML = "Done";
                }
            });
        }
    });

    xhr.send(formData);

    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            allStartUploadButons.forEach(item => {
                item.setAttribute('disabled', 'disabled');
            });
            console.log('upload successful!\n');
        }
    }




}

export default uploadFiles;
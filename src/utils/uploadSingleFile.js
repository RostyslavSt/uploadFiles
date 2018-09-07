
//upload
function uploadSingleFile(file, progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton) {
    // console.log(file);
    let url = 'http://localhost:3002/upload';

    let formData = new FormData();
    formData.append('uploads[]', file, file.name);
    // console.log(totalFileSize);
    // console.log(filesSizePushToServer);
    let totalPercentage = parseInt((filesSizePushToServer/totalFileSize)*100);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
            // calculate the percentage of upload completed
                 
            let percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
            // console.log(percentComplete);

            // update the Bootstrap progress bar with the new percentage

            progressBarSingle.setAttribute("style", `width: ${percentComplete}%`);
            progressBarSingle.innerHTML = `${percentComplete} %`;

            progressBarMain.setAttribute("style", `width: ${totalPercentage}%`);
            progressBarMain.innerHTML = `${totalPercentage} %`;
          
          
            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
                progressBarSingle.innerHTML = "Done";
            }
        }
    });

    xhr.send(formData);

    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            startUploadButton.setAttribute('disabled', 'disabled');
 
            console.log('upload successful!\n');
        }
    }
}

export default uploadSingleFile;
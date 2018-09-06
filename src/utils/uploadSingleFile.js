
//upload
function uploadSingleFile(file, progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer) {
    // console.log(file);
    let url = 'http://localhost:3002/upload';

    let formData = new FormData();
    formData.append('uploads[]', file, file.name);
    console.log(totalFileSize);
    console.log(filesSizePushToServer);
    let totalPercentage = parseInt((filesSizePushToServer/totalFileSize)*100);
    
    $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log('upload successful!\n' + data);
        },
        xhr: function () {
            // create an XMLHttpRequest
            let xhr = new XMLHttpRequest();

            // listen to the 'progress' event
            xhr.upload.addEventListener('progress', function (evt) {
                
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

            }, false);

            return xhr;
        }
    });
}

export default uploadSingleFile;
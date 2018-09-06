
//upload
function uploadSingleFile(file, progressBarTag) {
    // console.log(file);
    let url = 'http://localhost:3002/upload';

    let formData = new FormData();
    formData.append('uploads[]', file, file.name);
    
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
            var xhr = new XMLHttpRequest();

            // listen to the 'progress' event
            xhr.upload.addEventListener('progress', function (evt) {
                
                if (evt.lengthComputable) {
                    // calculate the percentage of upload completed
                 

                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    // console.log(percentComplete);

                    // update the Bootstrap progress bar with the new percentage

                    progressBarTag.setAttribute("style", `width: ${percentComplete}%`);
                    progressBarTag.innerHTML = `${percentComplete} %`;
                  
                    // once the upload reaches 100%, set the progress bar text to done
                    if (percentComplete === 100) {
                        progressBarTag.innerHTML = "Done";
                    }
                }

            }, false);

            return xhr;
        }
    });
}

export default uploadSingleFile;
//upload
function uploadFiles(files, filesFromDrugAndDrop, progressBarTag) {
    console.log(files);
    console.log(filesFromDrugAndDrop);
    let url = 'http://localhost:3002/upload';

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

    $.ajax({
        url: 'http://localhost:3002/upload',
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
                    console.log(percentComplete);

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

    // fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(() => {
    //         // progressDone();
    //         console.log("files are uploaded");
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
}

export default uploadFiles;
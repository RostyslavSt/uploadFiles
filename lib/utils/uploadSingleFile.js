'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//upload
function uploadSingleFile(file, progressBarSingle, progressBarMain, totalFileSize, filesSizePushToServer, startUploadButton) {
    // console.log(file);
    var url = 'http://localhost:3002/upload';

    var formData = new FormData();
    formData.append('uploads[]', file, file.name);
    // console.log(totalFileSize);
    // console.log(filesSizePushToServer);
    var totalPercentage = parseInt(filesSizePushToServer / totalFileSize * 100);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.upload.addEventListener('progress', function (evt) {
        if (evt.lengthComputable) {
            // calculate the percentage of upload completed

            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
            // console.log(percentComplete);

            // update the Bootstrap progress bar with the new percentage

            progressBarSingle.setAttribute("style", 'width: ' + percentComplete + '%');
            progressBarSingle.innerHTML = percentComplete + ' %';

            progressBarMain.setAttribute("style", 'width: ' + totalPercentage + '%');
            progressBarMain.innerHTML = totalPercentage + ' %';

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
                progressBarSingle.innerHTML = "Done";
            }
        }
    });

    xhr.send(formData);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            startUploadButton.setAttribute('disabled', 'disabled');

            console.log('upload successful!\n');
        }
    };
}

exports.default = uploadSingleFile;
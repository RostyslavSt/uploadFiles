'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//upload
function uploadFiles(files, filesFromDrugAndDrop, progressBarTag, singleProgressBarArr) {
    // console.log(files);
    // console.log(filesFromDrugAndDrop);
    var url = 'http://localhost:3002/upload';
    var url2 = 'http://localhost:3002/test_post';
    var allStartUploadButons = document.querySelectorAll('.start');

    var formData = new FormData();

    if (files.length > 0) {
        // loop through all the selected files and add them to the formData object
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
        }
    }
    if (filesFromDrugAndDrop.length > 0) {
        for (var _i = 0; _i < filesFromDrugAndDrop.length; _i++) {
            var _file = filesFromDrugAndDrop[_i];
            // add the files to formData object for the data payload
            formData.append('uploads[]', _file, _file.name);
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.upload.addEventListener('progress', function (evt) {
        if (evt.lengthComputable) {

            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            progressBarTag.setAttribute("style", 'width: ' + percentComplete + '%');
            progressBarTag.innerHTML = percentComplete + ' %';

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
                progressBarTag.innerHTML = "Done";
            }

            singleProgressBarArr.forEach(function (elem) {
                elem.setAttribute("style", 'width: ' + percentComplete + '%');
                elem.innerHTML = percentComplete + ' %';

                // once the upload reaches 100%, set the progress bar text to done
                if (percentComplete === 100) {
                    elem.innerHTML = "Done";
                }
            });
        }
    });

    xhr.send(formData);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            allStartUploadButons.forEach(function (item) {
                item.setAttribute('disabled', 'disabled');
            });
            console.log('upload successful!\n');
        }
    };
}

exports.default = uploadFiles;
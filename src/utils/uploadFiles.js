// upload
function uploadFiles(files, filesFromDrugAndDrop, progressBarTag, singleProgressBarArr, serverURL) {
  const progressBarTagItem = progressBarTag;
  const allStartUploadButons = document.querySelectorAll('.start');

  const formData = new window.FormData();

  if (files.length > 0) {
    // loop through all the selected files and add them to the formData object
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
    }
  }
  if (filesFromDrugAndDrop.length > 0) {
    for (let i = 0; i < filesFromDrugAndDrop.length; i += 1) {
      const file = filesFromDrugAndDrop[i];
      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
    }
  }

  const xhr = new window.XMLHttpRequest();
  xhr.open('POST', serverURL, true);
  xhr.upload.addEventListener('progress', (evt) => {
    if (evt.lengthComputable) {
      // calculate the percentage of upload completed
      let percentComplete = evt.loaded / evt.total;
      percentComplete = parseInt(percentComplete * 100, 10);

      // update the Bootstrap progress bar with the new percentage
      progressBarTag.setAttribute('style', `width: ${percentComplete}%`);
      progressBarTagItem.innerHTML = `${percentComplete} %`;

      // once the upload reaches 100%, set the progress bar text to done
      if (percentComplete === 100) {
        progressBarTagItem.innerHTML = 'Done';
      }

      singleProgressBarArr.forEach((elem) => {
        const item = elem;
        item.setAttribute('style', `width: ${percentComplete}%`);
        item.innerHTML = `${percentComplete} %`;

        // once the upload reaches 100%, set the progress bar text to done
        if (percentComplete === 100) {
          item.innerHTML = 'Done';
        }
      });
    }
  });

  xhr.send(formData);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) { return; }

    if (xhr.status !== 200) {
      console.log(`${xhr.status}: ${xhr.statusText}`);
    } else {
      allStartUploadButons.forEach((item) => {
        item.setAttribute('disabled', 'disabled');
      });
      console.log('upload successful!\n');
    }
  };
}

export default uploadFiles;

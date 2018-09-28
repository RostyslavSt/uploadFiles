// upload
function uploadFiles(progressBarTag, singleProgressBarArr, serverURL, formData) {
  const progressBarTagItem = progressBarTag;
  const allStartUploadButons = document.querySelectorAll('.start');
  const xhr = new window.XMLHttpRequest();
  xhr.open('POST', serverURL, true);
  xhr.upload.addEventListener('progress', (evt) => {
    if (evt.lengthComputable) {
      // calculate the percentage of upload completed
      let percentComplete = evt.loaded / evt.total;
      percentComplete = parseInt(percentComplete * 100, 10);
      // update the Bootstrap progress bar with the new percentage
      progressBarTagItem.setAttribute('style', `width: ${percentComplete}%`);
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

//  upload
function uploadSingleFile(file, progressBarSingle, progressBarMain,
  totalFileSize, filesSizePushToServer, startUploadButton, serverURL, createSingleFileItemFromServer, ul, fileID) {
  const progressBarSingleItem = progressBarSingle;
  const progressBarMainVar = progressBarMain;
  const formData = new window.FormData();
  formData.append('uploads[]', file, file.name);
  // console.log(totalFileSize);
  // console.log(filesSizePushToServer);
  const totalPercentage = parseInt((filesSizePushToServer / totalFileSize) * 100, 10);
  const xhr = new window.XMLHttpRequest();
  xhr.open('POST', serverURL, true);
  xhr.upload.addEventListener('progress', (evt) => {
    if (evt.lengthComputable) {
      // calculate the percentage of upload completed

      let percentComplete = evt.loaded / evt.total;
      percentComplete = parseInt(percentComplete * 100, 10);
      // console.log(percentComplete);

      // update the Bootstrap progress bar with the new percentage

      progressBarSingleItem.setAttribute('style', `width: ${percentComplete}%`);
      progressBarSingleItem.innerHTML = `${percentComplete} %`;

      progressBarMainVar.setAttribute('style', `width: ${totalPercentage}%`);
      progressBarMainVar.innerHTML = `${totalPercentage} %`;


      // once the upload reaches 100%, set the progress bar text to done
      if (percentComplete === 100) {
        progressBarSingleItem.innerHTML = 'Done';
      }
    }
  });

  xhr.send(formData);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) { return; }

    if (xhr.status !== 200) {
      console.log(`${xhr.status}: ${xhr.statusText}`);
    } else {
      startUploadButton.setAttribute('disabled', 'disabled');

      const responseFromServer = JSON.parse(xhr.response);
      console.dir(responseFromServer);
      setTimeout(createSingleFileItemFromServer, 1000, ul, responseFromServer, fileID);
      console.log('upload successful!\n');
    }
  };
}

export default uploadSingleFile;

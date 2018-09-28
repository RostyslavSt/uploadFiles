function createFormDataForUploading(filesInput, filesDrugAndDrop, formWithData) {
  const localFormData = formWithData;
  // const formData = new window.FormData();
  if (filesInput.length > 0) {
    // loop through all the selected files and add them to the formData object
    for (let i = 0; i < filesInput.length; i += 1) {
      const file = filesInput[i];
      // add the files to formData object for the data payload
      localFormData.append(file.id, file, file.name);
    }
  }
  if (filesDrugAndDrop.length > 0) {
    for (let i = 0; i < filesDrugAndDrop.length; i += 1) {
      const file = filesDrugAndDrop[i];
      // add the files to formData object for the data payload
      localFormData.append(file.id, file, file.name);
    }
  }
  return localFormData;
}

export default createFormDataForUploading;
function showFormDataContent(data) {
  data.forEach((fileObj, key) => {
    console.log(key);
    console.log(fileObj);
  });
}

export default showFormDataContent;

function showFormDataContent(data) {
  data.array.forEach((fileObj, key) => {
    console.log(key);
    console.log(fileObj);
  });
}

export default showFormDataContent;
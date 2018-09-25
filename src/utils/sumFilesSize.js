function sumFilesSize(obj1, obj2) {
  let totalFileSize = 0;
  if (obj1.length > 0) {
    const arr1 = [...obj1];
    arr1.forEach((item) => {
      totalFileSize += item.size;
    });
  }
  if (obj2.length > 0) {
    const arr2 = [...obj2];
    arr2.forEach((item) => {
      totalFileSize += item.size;
    });
  }
  // console.log(totalFileSize);

  return totalFileSize;
}

export default sumFilesSize;

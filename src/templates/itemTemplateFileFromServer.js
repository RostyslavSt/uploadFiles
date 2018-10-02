function itemTemplateFileFromServer(url, fileName, fileSize, id) {
  const str = `<div class="li-item">
                <div class="image"><img src="${url}"></div>
                <div class="file-name">${fileName}</div>
              
                <div class="file-size">${fileSize}<span> Kb</span></div>
                <div class="buttons">
                    <button class="btn btn-primary start" id="${id}">
                        <i class="glyphicon glyphicon-upload"></i>
                        <span>Done</span>
                    </button>
                </div>
               </div>`;

  return str;
}
export default itemTemplateFileFromServer;

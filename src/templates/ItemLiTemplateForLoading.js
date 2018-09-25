function ItemLiTemplateForLoading(url, fileName, fileSize, id) {
  const str = `<div class="li-item">
                <div class="image"><img src="${url}"></div>
                <div class="file-name">${fileName}</div>
                <div class="progress progressBar-for-li">
                    <div class="progress-bar single" role="progressbar" ></div>
                </div>
                <div class="file-size">${fileSize}<span> Kb</span></div>
                <div class="buttons">
                    <button class="btn btn-primary start" id="${id}">
                        <i class="glyphicon glyphicon-upload"></i>
                        <span>Start</span>
                    </button>
                    <button class="btn btn-warning cancel">
                        <i class="glyphicon glyphicon-ban-circle"></i>
                        <span>Cancel</span>
                    </button>
                 </div>
            </div>`;

  return str;
}
export default ItemLiTemplateForLoading;

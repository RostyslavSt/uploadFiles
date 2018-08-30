
const form = document.querySelector('form');
console.log(form);

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    form.addEventListener('change', handleFileSelect, false);
    fileContainer = document.querySelector("#selectedFiles");
}
function handleFileSelect(e) {
    if(!e.target.files || !window.FileReader) return;
    let files = e.target.files;
    let filesArr = Array.prototype.slice.call(files);
    console.log(files);
    console.log(filesArr);
    let ul = document.createElement('ul');
    fileContainer.appendChild(ul);
    for (let i=0; i < files.length; i++) {
        let fileItem = files[i];
        let li = document.createElement('li');
        
        li.innerHTML = fileItem.name
        ul.appendChild(li);

        var reader = new FileReader();
        reader.onload = function (e) {
            var html = "<img src=\"" + e.target.result + "\">" + f.name + "<br clear=\"left\"/>";
            selDiv.innerHTML += html;				
        }
        reader.readAsDataURL(f); 
    


    }
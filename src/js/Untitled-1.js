form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('wdwwd');
    

    const files = document.querySelector('[type=file]').files;
    console.log(files);
    let ul = document.createElement('ul');

    form.appendChild(ul);

    for (let key in files) {
        console.log(parseInt(key));
        if (typeof(parseInt(key)) === 'number') {
            console.log(files[key].name);
        }
        
    }
    // files.forEach(item => {
    //     let li = document.createElement('li');
    //     console.log(item.name);
    //     ul.appendChild(li);
    // });

    // const formData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //     let file = files[i];

    //     formData.append('files[]', file);
    // }

    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // }).then(response => {
    //     console.log(response);
    // });
});
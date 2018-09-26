# files uploader
 To use this app you should:

 1. Install this package with npm - "npm install project-files-uploader --save ".

 2. Import function "main" to your js code - "import main from 'project-files-uploader'".

 3. Optionally you can use prepared server for this app. You can get it from https://github.com/RostyslavSt/serverUploadFiles.
 To start server please run the command "npm start". It will start server on localhost:3002. 
 Api for uploading: "http://localhost:3002/upload".

 4. Then in your code you should call function "main" with two parameters `main(<root element>, <server url>)`.

 `<root element>` it is your html tag where you want to add form for uploading files.
 
 For example your js code:

```
<script>

  import main from 'project-files-uploader';

  const serverURL = 'http://localhost:3002/upload';

  const rootElement = document.getElementById('block');

  main(rootElement, serverURL);

</script>
```


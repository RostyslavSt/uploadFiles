function mainHtmlBodyTemplate() {
  const htmlBody = `<section>
                    <div id="drop-area">
                        <form method="post" enctype="multipart/form-data" name="formUpFiles">
                            <div class="container" id="form-container">
                                <div class="row">
                                    
                                        <div class="card text-white bg-info mb-3 buttons-block">
                                            <div class="card-body">
                                                <h2>File Uploader</h2>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar"></div>
                                                </div>
                                                <input id="choose-input" type="file" name="uploads[]" multiple="multiple">
                                                <label for="choose-input" class="btn btn-lg choose-btn" >Choose File</label>
                                                <input type="submit" class="btn btn-lg upload-btn" value="Upload Files" name="submit">
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </form>
                        </div>
                        <div id="selectedFiles"></div>
                    </section>`;

  return htmlBody;
}
export default mainHtmlBodyTemplate;

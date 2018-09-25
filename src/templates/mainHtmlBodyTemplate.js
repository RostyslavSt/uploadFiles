function mainHtmlBodyTemplate() {
  const htmlBody = `<section>
                    <div id="drop-area">
                        <form method="post" enctype="multipart/form-data" name="formUpFiles">
                            <div class="container" id="form-container">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="panel panel-default">
                                            <div class="panel-body">
                                                <span class="glyphicon glyphicon-cloud-upload"></span>
                                                <h2>File Uploader</h2>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar"></div>
                                                </div>
                                                <!-- <button class="btn btn-lg choose-btn" type="button">Choose File</button> -->
                                                <input id="choose-input" type="file" name="uploads[]" multiple="multiple">
                                                <label for="choose-input" class="btn btn-lg choose-btn" type="button">Choose File</label>
                                                <!-- <button class="btn btn-lg upload-btn" type="button">Upload File</button> -->
                                                <input type="submit" class="btn btn-lg upload-btn" value="Upload Files" name="submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div id="selectedFiles"></div>
                    </section>;`;

  return htmlBody;
}
export default mainHtmlBodyTemplate;

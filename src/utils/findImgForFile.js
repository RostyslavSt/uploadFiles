import imgExcel from '../img/excel.png';
import imgWord from '../img/word.png';
import imgPdf from '../img/pdf.png';
import imgText from '../img/text.png';
import imgUnknownFile from '../img/unknown-file.png';

function findImgForFile(currentFilePath, fileNameExtension) {
  // console.log(extOfFile);
  const fileImgRoutes = {
    pdf: imgPdf,
    docx: imgWord,
    doc: imgWord,
    xlsx: imgExcel,
    xls: imgExcel,
    txt: imgText,
    png: currentFilePath,
    jpg: currentFilePath,
    svg: currentFilePath,
    gif: currentFilePath,
  };

  let fileImgPath = fileImgRoutes[fileNameExtension];

  if (typeof fileImgPath === 'undefined') {
    fileImgPath = imgUnknownFile;
  }
  return fileImgPath;

  // return fileImgUrl;


  // switch (fileNameExtension) {
  //         case 'pdf':
  //             {
  //                 fileImgUrl = imgPdf;
  //                 break;
  //             }
  //         case 'docx':
  //             {
  //                 fileImgUrl = imgWord;
  //                 break;
  //             }
  //         case 'doc':
  //             {
  //                 fileImgUrl = imgWord;
  //                 break;
  //             }
  //         case 'xlsx':
  //             {
  //                 fileImgUrl = imgExcel;
  //                 break;
  //             }
  //         case 'xls':
  //             {
  //                 fileImgUrl = imgExcel;
  //                 break;
  //             }
  //         case 'txt':
  //             fileImgUrl = imgText;
  //             break;
  //         default:
  //             {
  //                 fileImgUrl = imgUnknownFile;
  //             }

  //     }
}

export default findImgForFile;

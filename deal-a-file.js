const fs = require('fs');
const path = require('path');

const qr = require('qr-image');

const TEST_REGEX = new RegExp(require('./config').TEST_REGEX, 'g');
const {QR_CODES_DIR} = require('./config');

function search(str, regex) {
  const result = [];
  while (true) {
    const temp = TEST_REGEX.exec(str);
    if (temp === null || !temp[1]) {
      break;
    }
    result.push(temp[1]);
  }
  return result;
}

/**
 * 处理文件
 * @param {String} data
 */
function dealAFile(data, toWriteFileName) {
  const searchReslut = [...new Set(search(data, TEST_REGEX))];
  searchReslut.forEach((item, index) => {
    const qr_png = qr.image(item, {type: 'png'});
    qr_png.pipe(fs.createWriteStream(path.resolve(QR_CODES_DIR, `${toWriteFileName.split('.')[0]}_${index}.png`)));
  });
}

module.exports = {
  dealAFile,
};


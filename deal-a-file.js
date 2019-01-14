const qr = require('qr-image');

const TEST_REGEX = new RegExp(require('./config').TEST_REGEX, 'g');

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
 * @return {Array<ReadableStream>} 返回一个可读流数组
 */
function dealAFile(data) {
  const searchReslut = [...new Set(search(data, TEST_REGEX))];
  const result = [];
  searchReslut.forEach((item, index) => {
    const qr_png = qr.image(item, {type: 'png'});
    result.push(qr_png);
  });
  return result;
}

module.exports = {
  dealAFile,
};


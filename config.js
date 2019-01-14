const path = require('path');
const fs = require('fs');

module.exports = {
  // 要读取的文件夹
  FILES_TO_READ_DIR: path.resolve(__dirname, './files-to-read'),
  // 生成二维码的文件夹
  QR_CODES_DIR: path.resolve(__dirname, './qr-codes'),
  // 要检测的正则
  TEST_REGEX: /(https:\/\/www.eimoney.com[^\s"]*)/,
};




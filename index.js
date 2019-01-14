const path = require('path');
const fs = require('fs');

const {FILES_TO_READ_DIR} = require('./config');
const {QR_CODES_DIR} = require('./config');

const {dealAFile} = require('./deal-a-file');

fs.readdir(FILES_TO_READ_DIR, ((err, files) => {
  let resultNumber = 0;
  files.forEach((item) => {
    fs.readFile(path.resolve(FILES_TO_READ_DIR, item), {encoding: 'utf8'}, ((err, data) => {
      const dealResult = dealAFile(data, item);
      dealResult.forEach(resultItem => {
        resultNumber++;
        resultItem.pipe(fs.createWriteStream(path.resolve(QR_CODES_DIR, `${resultNumber}.png`)));
      });
    }));
  });

}));














const path = require('path');
const fs = require('fs');

const {FILES_TO_READ_DIR} = require('./config');

const {dealAFile} = require('./deal-a-file');

fs.readdir(FILES_TO_READ_DIR, ((err, files) => {
  files.forEach((item)=>{
    fs.readFile(path.resolve(FILES_TO_READ_DIR, item), {encoding: 'utf8'}, ((err, data) => {
      dealAFile(data, item);
    }));
  });

}));














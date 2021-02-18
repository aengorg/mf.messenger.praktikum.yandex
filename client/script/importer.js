const FileHound = require('filehound');
const fs = require('fs');
const path = require('path');

const DIST_PATH = '../public/dist/';

const files = FileHound.create()
  .paths(path.join(__dirname, DIST_PATH))
  .discard('node_modules')
  .ext('js')
  .find();

files.then((filePaths) => {
  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (!data.match(/import|export .* from/g)) {
        return;
      }
      if (data.match(/\.js['"]/g)) {
        return;
      }
      let newData = data.replace(
        /(import|export .* from\s+['"])(.*)(?=['"])/g,
        '$1$2.js',
      );
      if (err) throw err;
      fs.writeFile(filepath, newData, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
  console.log('complete importer');
});

const FileHound = require('filehound');
const fs = require('fs');
const path = require('path');
const files = FileHound.create()
  .paths(path.join(__dirname, '../public/dist/'))
  .discard('node_modules')
  .ext('js')
  .find();

// console.log();

files.then((filePaths) => {
  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (!data.match(/import|export .* from/g)) {
        return;
      }
      let newData = data.replace(
        /(import|export .* from\s+['"])(.*)(?=['"])/g,
        '$1$2.js',
      );
      if (err) throw err;
      fs.writeFile(filepath, newData, function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
  console.log('complete');
});

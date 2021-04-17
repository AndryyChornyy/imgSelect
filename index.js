const fs = require('fs');
const lineReader = require('line-reader');
const glob = require("glob");

  lineReader.eachLine('list.txt', function(line, last) {
    fs.readdir('img', function (err, files) {
    if (err) {
    //   console.log(err);
      return;
    }
    // console.log(files);
   for(file of files){
    //   console.log(`file: ${file} line: ${line} `)
      if(file == line ){
        fs.readFile(`img/${line}`, function (err, data) {
            if (err) throw err;
            fs.writeFile(`imgInList/${line}`, data, function (err) {
                if (err) throw err;
                console.log(`Image ${line} copy to imgInList ✅ `)
            });
        });
      
      }
   }

  
  });
 
  });

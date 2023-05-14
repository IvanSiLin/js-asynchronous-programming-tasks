import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepathOne, filepathTwo, callback) => {

    fs.stat(filepathOne, (err, statOne) => {

      if (err) {

        callback(err);
        return;
      }

      fs.stat(filepathTwo, (err, statTwo) => {

        if (err) {

          callback(err);
          return;
        }

        const sizeDiff = statOne.size - statTwo.size;
        const result = Math.sign(sizeDiff);
        callback(undefined, result);
      });
    });
  };
  
  export default compareFileSizes;
// END
import fs from 'fs';

// BEGIN
export const write = (path, data, callback) => {

    fs.writeFile(path, data, (error) => {

      if (error) {

        console.log(`Ошибка: ${error}`);
      } else {

        callback();
      }
    });
  };
  
  export default write;
// END
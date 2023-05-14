import fs from 'fs';

// BEGIN
export const print = async (path) => {

    try {

      const data = await fs.promises.readFile(path, 'utf-8');
      console.log(data);
    } catch (error) {
        
      console.log(`Ошибка: ${error}`);
    }
  };
  
  export default print;
// END

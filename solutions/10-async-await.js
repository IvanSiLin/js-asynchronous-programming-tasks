import fsp from 'fs/promises';

// BEGIN
export const exchange = async (filepathOne, filepathTwo) => {

    try {

      const contentOne = await fsp.readFile(filepathOne, 'utf-8');

      const contentTwo = await fsp.readFile(filepathTwo, 'utf-8');

      await fsp.writeFile(filepathOne, contentTwo);
      await fsp.writeFile(filepathTwo, contentOne);
    } catch (err) {

      console.log(err);
    }
  };
// END
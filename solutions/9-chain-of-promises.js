import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => {

    const promises = paths.map((path) => {

      return fsp.stat(path).then((stats) => {

          return stats.isDirectory() ? 'directory' : 'file';
        }).catch(() => null);
    });
  
    return Promise.all(promises);
  };

  export default getTypes;
// END
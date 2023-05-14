import fs from 'fs';

// BEGIN
/*export function stalker (filepath, interval, callback) {

    let lastCheckTime = Date.now();
  
    const timerId = setInterval(() => {

      fs.stat(filepath, (err, stats) => {

        if (err) {

          clearInterval(timerId);
          callback(err);
          return;
        }
        if (stats.mtimeMs > lastCheckTime) {

          lastCheckTime = stats.mtimeMs;
          callback(null);
        }
      });
    }, interval);
  
    return timerId;
  };

  export default stalker;
// END
*/
export default watch = (filepath, interval, cb) => {
    let lastCheck = Date.now();
    const timer = setInterval(() => {
        fs.stat(filepath, (err, stats) => {
            if (err) {
                clearInterval(timer);
                cb(err);
                return;
            }
            if (stats.mtimeMs > lastCheck) {
                lastCheck = stats.mtimeMs;
                cb(null);
            }
        });
    }, interval);

    return timer;
};

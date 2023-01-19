/*
  This file simulates waiting for promise to finish.
*/
const wait = async (time: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export default wait;

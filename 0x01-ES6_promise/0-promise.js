export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

/* eslint-disable */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const response = {
      status: 200,
      body: 'Success',
    };

    if (success) {
      resolve(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

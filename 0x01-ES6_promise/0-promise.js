export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Success: API responded successfully");
    } else {
      reject("Error: API response failed");
    }
  });
}

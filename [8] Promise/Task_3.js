"use strict";

function fetchDataFromAPIs(apiUrls) {
  const promises = apiUrls.map((apiUrl) => {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch data from API: ${apiUrl}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return Promise.all(promises);
}

"use strict";

function fetchURLsContent(urls) {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);

      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Failed to fetch URL: ${url}`));
        }
      };

      xhr.onerror = function () {
        reject(new Error(`Failed to fetch URL: ${url}`));
      };

      xhr.send();
    });
  });

  return Promise.all(promises);
}

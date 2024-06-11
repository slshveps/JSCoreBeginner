"use strict";

async function fetchDataFromServers(urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }

      return response.json();
    });

    const responseData = await Promise.all(promises);

    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

"use strict";

async function fetchDataFromServer1(url1) {
  try {
    const response1 = await fetch(url1);

    if (!response1.ok) {
      throw new Error(`Failed to fetch data from ${url1}`);
    }

    const data1 = await response1.json();

    return data1;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function fetchDataFromServer2(url2, dataFromServer1) {
  try {
    const response2 = await fetch(url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFromServer1),
    });

    if (!response2.ok) {
      throw new Error(`Failed to fetch data from ${url2}`);
    }

    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

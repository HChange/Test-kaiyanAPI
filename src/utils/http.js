import "whatwg-fetch";

export const get = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const post = async (url, rdata) => {
  var fetchOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(rdata)
  };
  try {
    let response = await fetch(url, fetchOptions);
    let data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Used to make it easy to fetch from backend
 * @param {string}
 * @returns
 */
export async function fetchUrl({ method, apiName, reqBody }) {
  let data = {};
  let url = "http://localhost:8000/" + apiName;

  let requests = {
    method,
    body: reqBody,
  };
  try {
    let response = await fetch(url, requests);
    data = await response.json();

    return data;
  } catch (e) {
    return e;
  }
}

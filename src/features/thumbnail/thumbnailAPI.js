/* eslint-disable no-unused-vars */
// A mock function to mimic making an async request for data
// eslint-disable-next-line no-unused-vars

const myHeaders = new Headers();
// myHeaders.append('Authorization', 'Client-ID 0651e3e80783ad1');

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Client-ID 0651e3e80783ad1'
  }
};

const fetchCount = (q = 'cats') =>
  fetch('https://api.imgur.com/3/gallery/search?q=cats', requestOptions)
    .then((response) => response.json())
    .then(console.log);

// eslint-disable-next-line no-promise-executor-return
// new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));

export default fetchCount;

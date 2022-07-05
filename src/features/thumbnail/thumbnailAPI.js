/* eslint-disable no-unused-vars */

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Client-ID 0651e3e80783ad1'
  }
};

const getImages = (q = 'cats') =>
  fetch('https://api.imgur.com/3/gallery/search?q=cats', requestOptions)
    .then((response) => response.json())
    .then((response) => response);

export default getImages;

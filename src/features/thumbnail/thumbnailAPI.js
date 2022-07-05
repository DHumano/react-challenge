const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Client-ID 0651e3e80783ad1'
  }
};
const getImages = (section, windows, sort) =>
  fetch(
    `https://api.imgur.com/3/gallery/${section}/${sort}/${windows}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => response);

export default getImages;

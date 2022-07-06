const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
  }
};

const getImages = (section, windows, sort) =>
  fetch(
    `${process.env.REACT_APP_IMGUR_API}/${section}/${sort}/${windows}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => response);

export default getImages;

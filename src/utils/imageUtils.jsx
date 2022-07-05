const imageFormatting = (data) => {
  const result = data.filter(
    // filter to get just jpeg images
    (item) => item.images && item.images[0].type === 'image/jpeg'
  );
  return result;
};

export default imageFormatting;

import imageFormatting from './imageUtils';

describe('Image utils', () => {
  const initialData = [
    { images: [{ type: 'image/jpeg' }] },
    { images: [{ type: 'asd' }] }
  ];
  it('Should filter jpeg images', () => {
    const result = imageFormatting(initialData);
    expect(result).toHaveLength(1);
  });
});

import type { FormSchema, SliceForm } from '../types';

const get64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const readerOfFile = new FileReader();
    readerOfFile.readAsDataURL(file);
    readerOfFile.onload = () => resolve(readerOfFile.result as string);
  });
};

const getForm = async (data: FormSchema) => {
  const img = data.image[0];
  const base64 = await get64(img);

  return {
    ...data,
    image: {
      type: img.type,
      size: img.size,
      base64,
    },
  } as SliceForm;
};

export default getForm;

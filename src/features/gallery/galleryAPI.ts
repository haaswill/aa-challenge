import { IImage } from './gallerySlice';

export async function fetchImages(): Promise<IImage[]> {
  const response = await fetch(
    'https://agencyanalytics-api.vercel.app/images.json',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const result = await response.json();
  return result;
}

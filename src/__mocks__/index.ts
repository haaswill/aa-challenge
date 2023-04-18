import { IImage } from '@/features/gallery/gallerySlice';

export const getImageMock = ({
  id = 1,
  favorited = false,
  description = 'Test Description',
}: {
  id?: number;
  favorited?: boolean;
  description?: string;
}): IImage => {
  return {
    createdAt: '2017-07-15T08:23:20.462Z',
    description,
    dimensions: {
      height: 4800,
      width: 3200,
    },
    favorited,
    filename: 'test.jpg',
    id: id.toString(),
    resolution: {
      height: 72,
      width: 72,
    },
    sharedWith: [],
    sizeInBytes: 4800000,
    updatedAt: '2022-12-16T12:41:33.736Z',
    uploadedBy: 'Ms. Jimmie Cole',
    url: 'test/test.jpg',
  };
};

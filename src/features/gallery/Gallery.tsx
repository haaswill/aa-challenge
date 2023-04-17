import { useEffect } from 'react';
import Image from 'next/image';

import { useAppSelector, useAppDispatch } from '@/hooks';
import {
  IImage,
  fetchImagesAsync,
  getAllImages,
  getFavoritedImages,
} from './gallerySlice';
import Spinner from '@/components/Spinner';
import styles from './Gallery.module.css';
import ImageList from '@/components/ImageList';
import Tabs from '@/components/Tabs';

function Gallery() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(getAllImages);
  const favoritedImages = useAppSelector(getFavoritedImages);

  const status = useAppSelector((state) => state.gallery.status);
  const error = useAppSelector((state) => state.gallery.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImagesAsync());
    }
  }, [status, dispatch]);

  const handleOnClickImageListItem = (id: string) => {
    console.log(id);
  };

  const renderGallery = (images: IImage[]): JSX.Element => {
    switch (status) {
      case 'loading':
        return <Spinner />;
      case 'succeeded':
        return (
          <ImageList images={images} onClick={handleOnClickImageListItem} />
        );
      case 'failed':
        return <div>{error}</div>;
      default:
        return <p>No images :(</p>;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Photos</h1>
      <Tabs
        tabs={[
          {
            id: 1,
            content: renderGallery(images),
            title: 'Recently Added',
          },
          {
            id: 2,
            content: renderGallery(favoritedImages),
            title: 'Favorited',
          },
        ]}
      />
    </div>
  );
}

export default Gallery;

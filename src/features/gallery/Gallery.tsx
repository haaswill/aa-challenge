import { useEffect } from 'react';
import Image from 'next/image';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { fetchImagesAsync, getAllImages } from './gallerySlice';
import Spinner from '@/components/Spinner';
import styles from './Gallery.module.css';
import ImageList from '@/components/ImageList';
import Tabs from '@/components/Tabs';

function Gallery() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(getAllImages);

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

  const renderGallery = ({
    isFavorited,
  }: {
    isFavorited?: boolean;
  }): JSX.Element => {
    switch (status) {
      case 'loading':
        return <Spinner />;
      case 'succeeded':
        return (
          <ImageList
            images={
              isFavorited ? images.filter((image) => image.favorited) : images
            }
            onClick={handleOnClickImageListItem}
          />
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
            content: renderGallery({}),
            title: 'Recently Added',
          },
          {
            id: 2,
            content: renderGallery({ isFavorited: true }),
            title: 'Favorited',
          },
        ]}
      />
    </div>
  );
}

export default Gallery;

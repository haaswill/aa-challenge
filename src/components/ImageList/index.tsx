import React, { useState } from 'react';
import { IImage } from '@/features/gallery/gallerySlice';
import ListItem from '@/components/ImageListItem';
import styles from './ImageList.module.css';

interface IImageListProps {
  images: IImage[];
  onClick: (id: string) => void;
}

const ImageList = ({ images, onClick }: IImageListProps): JSX.Element => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOnClick = (id: string) => {
    setSelectedId(id);
    onClick(id);
  };

  return (
    <ul className={styles.container}>
      {images.map((image) => (
        <ListItem
          key={image.id}
          image={image}
          selected={image.id === selectedId}
          onClick={() => handleOnClick(image.id)}
        />
      ))}
    </ul>
  );
};

export default ImageList;

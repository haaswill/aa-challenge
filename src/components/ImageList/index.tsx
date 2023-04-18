import React, { useState } from 'react';
import { IImage } from '@/features/gallery/gallerySlice';
import ListItem from '@/components/ImageListItem';
import styles from './ImageList.module.css';

interface IImageListProps {
  images: IImage[];
  selectedImageId: string | null;
  onClick: (id: string) => void;
}

const ImageList = ({
  images,
  selectedImageId,
  onClick,
}: IImageListProps): JSX.Element => {
  return (
    <ul className={styles.container} role="list">
      {images.map((image) => (
        <ListItem
          key={image.id}
          image={image}
          selected={image.id === selectedImageId}
          onClick={() => onClick(image.id)}
        />
      ))}
    </ul>
  );
};

export default ImageList;

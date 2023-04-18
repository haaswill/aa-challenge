import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IImage } from '@/features/gallery/gallerySlice';
import { formatBytes } from '@/utils';
import Image from '@/components/Image';
import styles from './ImageListItem.module.css';

interface IImageListItemProps {
  image: IImage;
  selected: boolean;
  onClick: () => void;
}

const ImageListItem = ({
  image,
  selected = false,
  onClick,
}: IImageListItemProps): JSX.Element => {
  return (
    <li
      className={classNames([styles.container, selected && styles.selected])}
      onClick={onClick}
    >
      <Image
        src={image.url}
        alt={image.description || image.filename}
        customClass={styles.image}
      />
      <p className={styles.filename}>{image.filename}</p>
      <span className={styles.size}>{formatBytes(image.sizeInBytes)}</span>
    </li>
  );
};

export default ImageListItem;

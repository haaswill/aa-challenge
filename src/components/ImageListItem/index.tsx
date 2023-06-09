import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IImage } from '@/features/gallery/gallerySlice';
import { formatBytes } from '@/utils';
import Image from '@/components/Image';
import styles from './ImageListItem.module.css';

interface IImageListItemProps {
  image: IImage;
  selected: boolean;
  testid?: string;
  onClick: () => void;
}

const ImageListItem = ({
  image,
  selected = false,
  testid = 'image-list-item',
  onClick,
}: IImageListItemProps): JSX.Element => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.click();
    }
  };

  return (
    <li
      className={classNames([styles.container, selected && styles.selected])}
      role="listitem"
      data-testid={testid}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
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

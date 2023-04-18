import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IImage } from '@/features/gallery/gallerySlice';
import { formatBytes, formatDate } from '@/utils';
import Image from '@/components/Image';
import styles from './ImageDetails.module.css';
import ImageInformation from './ImageInformation';
import Button from '../Button';
import classNames from 'classnames';

interface IImageDetailsProps {
  image: IImage | null;
  onClickFavorite: (id: string, value: boolean) => void;
  onClickDelete: (id: string) => void;
}

const ImageDetails = ({
  image,
  onClickFavorite,
  onClickDelete,
}: IImageDetailsProps): JSX.Element | null => {
  if (!image) {
    return null;
  }

  const renderHeart = (id: string, favorited: boolean): JSX.Element => {
    return favorited ? (
      <BsHeartFill fill="#4f45e4" onClick={() => onClickFavorite(id, false)} />
    ) : (
      <BsHeart fill="#64748b" onClick={() => onClickFavorite(id, true)} />
    );
  };

  const renderDescription = (description: string | undefined) => {
    if (!description) {
      return null;
    }

    return (
      <div className={styles.row}>
        <h4 className={styles.heading}>Description</h4>
        <p className={styles.description}>{image.description}</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Image
        src={image.url}
        alt={image.description || image.filename}
        height={210}
        width={320}
      />
      <div className={styles.row}>
        <div className={styles.topActions}>
          <p className={styles.filename}>{image.filename}</p>
          {renderHeart(image.id, image.favorited)}
        </div>
        <span className={styles.size}>{formatBytes(image.sizeInBytes)}</span>
      </div>
      <div className={styles.row}>
        <h4 className={styles.heading}>Information</h4>
        <ImageInformation title="Uploaded by" value={image.uploadedBy} />
        <ImageInformation title="Created" value={formatDate(image.createdAt)} />
        <ImageInformation
          title="Last modified"
          value={formatDate(image.updatedAt)}
        />
        <ImageInformation
          title="Dimensions"
          value={`${image.dimensions.width} x ${image.dimensions.height}`}
        />
        <ImageInformation
          title="Resolution"
          value={`${image.resolution.width} x ${image.resolution.height}`}
        />
      </div>
      {renderDescription(image.description)}
      <div className={styles.row}>
        <Button label="Delete" onClick={() => onClickDelete(image.id)} />
      </div>
    </div>
  );
};

export default ImageDetails;

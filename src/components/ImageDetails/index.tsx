import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IImage } from '@/features/gallery/gallerySlice';
import { formatBytes } from '@/utils';
import Image from '@/components/Image';
import styles from './ImageDetails.module.css';
import ImageInformation from './ImageInformation';
import Button from '../Button';

interface IImageDetailsProps {
  image: IImage;
  onClickFavorite: (value: boolean) => void;
  onClickDelete: (id: string) => void;
}

const ImageDetails = ({
  image,
  onClickFavorite,
  onClickDelete,
}: IImageDetailsProps): JSX.Element => {
  const renderHeart = (favorited: boolean): JSX.Element => {
    return favorited ? (
      <BsHeartFill onClick={() => onClickFavorite(false)} />
    ) : (
      <BsHeart onClick={() => onClickFavorite(true)} />
    );
  };

  const renderDescription = (description: string | undefined) => {
    if (!description) {
      return null;
    }

    return (
      <div className={styles.row}>
        <h4>Description</h4>
        <p>{image.description}</p>
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
        <div className={styles.col}>
          <p className={styles.filename}>{image.filename}</p>
          <span className={styles.size}>{formatBytes(image.sizeInBytes)}</span>
        </div>
        <div className={styles.col}>{renderHeart(image.favorited)}</div>
      </div>
      <div className={styles.row}>
        <h4>Information</h4>
        <ImageInformation title="Uploaded by" value={image.uploadedBy} />
        <ImageInformation title="Created" value={image.createdAt} />
        <ImageInformation title="Last modified" value={image.updatedAt} />
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
      <Button label="Delete" onClick={() => onClickDelete(image.id)} />
    </div>
  );
};

export default ImageDetails;

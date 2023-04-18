import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IImage } from '@/features/gallery/gallerySlice';
import { formatBytes, formatDate } from '@/utils';
import Image from '@/components/Image';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import styles from './ImageDetails.module.css';
import ImageInformation from './ImageInformation';

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
      <IconButton
        label="Favorited"
        testid="favorited"
        onClick={() => onClickFavorite(id, false)}
        tabIndex={1}
        icon={<BsHeartFill fill="#4f45e4" className={styles.favorited} />}
      />
    ) : (
      <IconButton
        label="Not Favorited"
        testid="unfavorited"
        onClick={() => onClickFavorite(id, true)}
        tabIndex={1}
        icon={<BsHeart fill="#64748b" className={styles.favorited} />}
      />
    );
  };

  const renderDescription = (description: string | undefined) => {
    if (!description) {
      return null;
    }

    return (
      <div className={styles.row}>
        <h4 className={styles.heading} tabIndex={1}>
          Description
        </h4>
        <p className={styles.description} tabIndex={1}>
          {image.description}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Image
        src={image.url}
        alt={image.description || image.filename}
        customClass={styles.image}
        tabIndex={1}
      />
      <div className={styles.row}>
        <div className={styles.topActions}>
          <p className={styles.filename} tabIndex={1}>
            {image.filename}
          </p>
          {renderHeart(image.id, image.favorited)}
        </div>
        <span className={styles.size} tabIndex={1}>
          {formatBytes(image.sizeInBytes)}
        </span>
      </div>
      <div className={styles.row}>
        <h4 className={styles.heading} tabIndex={1}>
          Information
        </h4>
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
        <Button
          label="Delete"
          testid="delete"
          tabIndex={1}
          onClick={() => onClickDelete(image.id)}
        />
      </div>
    </div>
  );
};

export default ImageDetails;

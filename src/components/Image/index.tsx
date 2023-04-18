/* eslint-disable @next/next/no-img-element */
// Disabled NextJS image warning cause it wansn't
// working properly
import styles from './Image.module.css';
import classNames from 'classnames';

interface IImageProps {
  src: string;
  alt: string;
  customClass?: string;
  tabIndex?: number;
}

const Image = ({
  src,
  alt,
  customClass,
  tabIndex,
}: IImageProps): JSX.Element => {
  return (
    <img
      className={classNames([styles.image, customClass])}
      src={src}
      alt={alt}
      tabIndex={tabIndex}
    />
  );
};

export default Image;

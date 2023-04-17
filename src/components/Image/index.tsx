import NextImage from 'next/image';
import styles from './Image.module.css';

interface IImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image = ({ src, alt, width, height }: IImageProps): JSX.Element => {
  return (
    <NextImage
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;

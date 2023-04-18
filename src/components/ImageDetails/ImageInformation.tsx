import styles from './ImageDetails.module.css';

interface IImageInformationProps {
  title: string;
  value: string;
}

const ImageInformation = ({ title, value }: IImageInformationProps) => (
  <div className={styles.information}>
    <p className={styles.informationTitle} tabIndex={1}>
      {title}
    </p>
    <span className={styles.informationValue} tabIndex={1}>
      {value}
    </span>
  </div>
);

export default ImageInformation;

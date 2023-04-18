import styles from './ImageDetails.module.css';

interface IImageInformationProps {
  title: string;
  value: string;
}

const ImageInformation = ({ title, value }: IImageInformationProps) => (
  <div className={styles.information}>
    <p className={styles.informationTitle}>{title}</p>
    <span className={styles.informationValue}>{value}</span>
  </div>
);

export default ImageInformation;

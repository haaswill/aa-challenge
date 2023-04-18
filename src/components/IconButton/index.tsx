import { ReactElement } from 'react';
import styles from './IconButton.module.css';

interface IIconButtonProps {
  label: string;
  icon: ReactElement;
  onClick: () => void;
}

const IconButton = ({ label, icon, onClick }: IIconButtonProps) => {
  return (
    <button
      className={styles.button}
      aria-label={label}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;

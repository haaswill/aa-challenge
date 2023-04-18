import { ReactElement } from 'react';
import styles from './IconButton.module.css';

interface IIconButtonProps {
  label: string;
  icon: ReactElement;
  testid?: string;
  onClick: () => void;
}

const IconButton = ({
  label,
  icon,
  testid = 'icon-button',
  onClick,
}: IIconButtonProps) => {
  return (
    <button
      className={styles.button}
      aria-label={label}
      type="button"
      onClick={onClick}
      data-testid={testid}
    >
      {icon}
    </button>
  );
};

export default IconButton;

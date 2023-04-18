import { ReactElement } from 'react';
import styles from './IconButton.module.css';

interface IIconButtonProps {
  label: string;
  icon: ReactElement;
  testid?: string;
  tabIndex?: number;
  onClick: () => void;
}

const IconButton = ({
  label,
  icon,
  testid = 'icon-button',
  tabIndex,
  onClick,
}: IIconButtonProps) => {
  return (
    <button
      className={styles.button}
      aria-label={label}
      type="button"
      onClick={onClick}
      data-testid={testid}
      tabIndex={tabIndex}
    >
      {icon}
    </button>
  );
};

export default IconButton;

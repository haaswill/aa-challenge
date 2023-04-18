import styles from './Button.module.css';

interface IButtonProps {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  testid?: string;
  tabIndex?: number;
  onClick: () => void;
}

const Button = ({
  label,
  type = 'button',
  testid = 'button',
  tabIndex,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
      data-testid={testid}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

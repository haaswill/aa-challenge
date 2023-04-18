import styles from './Button.module.css';

interface IButtonProps {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  testid?: string;
  onClick: () => void;
}

const Button = ({
  label,
  type = 'button',
  testid = 'button',
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
      data-testid={testid}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

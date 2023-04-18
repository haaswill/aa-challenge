import styles from './Button.module.css';

interface IButtonProps {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  onClick: () => void;
}

const Button = ({ label, type = 'button', onClick }: IButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

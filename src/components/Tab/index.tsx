import { ReactElement } from 'react';
import styles from './Tab.module.css';

interface ITabProps {
  children: ReactElement;
}

const Tab = ({ children }: ITabProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default Tab;

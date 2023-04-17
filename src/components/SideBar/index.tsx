import { ReactElement } from 'react';
import styles from './SideBar.module.css';

interface ISideBarProps {
  children: ReactElement;
}

const SideBar = ({ children }: ISideBarProps) => (
  <section className={styles.container}>{children}</section>
);

export default SideBar;

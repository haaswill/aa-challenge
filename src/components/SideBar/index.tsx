import { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './SideBar.module.css';

interface ISideBarProps {
  children: ReactElement;
  isOpen: boolean;
}

const SideBar = ({ children, isOpen }: ISideBarProps) => (
  <section className={classNames([styles.container, isOpen && styles.open])}>
    {children}
  </section>
);

export default SideBar;

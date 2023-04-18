import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import { BsXLg } from 'react-icons/bs';
import styles from './SideBar.module.css';
import IconButton from '@/components/IconButton';

interface ISideBarProps {
  children: ReactElement;
  isOpen: boolean;
  testid?: string;
  onClickCloseButton: () => void;
}

const SideBar = ({
  children,
  isOpen,
  testid = 'sidebar',
  onClickCloseButton,
}: ISideBarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 689px)');
    setIsMobile(mediaQuery.matches);

    function handleMediaQueryChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const renderCloseButton = (isMobile: boolean): JSX.Element | null => {
    if (!isMobile) {
      return null;
    }

    return (
      <IconButton
        icon={<BsXLg fill="#10172a" className={styles.closeButton} />}
        label="Close"
        testid="close-button"
        onClick={onClickCloseButton}
      />
    );
  };

  return (
    <section
      className={classNames([
        isMobile ? styles.mobile : styles.desktop,
        isOpen && styles.open,
      ])}
      data-testid={testid}
    >
      {renderCloseButton(isMobile)}
      {children}
    </section>
  );
};

export default SideBar;

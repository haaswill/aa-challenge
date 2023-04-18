import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import styles from './Tabs.module.css';

export interface ITab {
  id: number;
  title: string;
  content: ReactElement;
}

interface ITabsProps {
  tabs: ITab[];
  testid?: string;
}

const Tabs = ({ tabs, testid = 'tabs' }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className={styles.container} role="tablist" data-testid={testid}>
      <ul className={styles.tabTitles}>
        {tabs.map((tab, index) => (
          <li
            className={classNames([
              styles.tabTitle,
              activeTab === tab.id && styles.active,
            ])}
            onClick={() => setActiveTab(tab.id)}
            key={`title-${tab.id}`}
            id={`tab${index}-tab`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab${index}`}
            data-testid={`${testid}-title-${index}`}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className={styles.tabContentContainer}>
        {tabs.map((tab, index) => (
          <div
            className={classNames([
              styles.tabContent,
              activeTab === tab.id && styles.active,
            ])}
            key={tab.id}
            id={`tab${index}`}
            aria-labelledby={`tab${index}-tab`}
            hidden={tab.id !== activeTab}
            data-testid={`${testid}-content-${index}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;

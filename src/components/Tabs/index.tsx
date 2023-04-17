import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import styles from './Tabs.module.css';

interface ITab {
  id: number;
  title: string;
  content: ReactElement;
}

interface ITabsProps {
  tabs: ITab[];
}

// TODO: Improve accessibility
const Tabs = ({ tabs }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.container}>
      <ul className={styles.tabTitles}>
        {tabs.map((tab) => (
          <li
            className={classNames([
              styles.tabTitle,
              activeTab === tab.id && styles.active,
            ])}
            onClick={() => setActiveTab(tab.id)}
            key={`title-${tab.id}`}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className={styles.tabContentContainer}>
        {tabs.map((tab) => (
          <div
            className={classNames([
              styles.tabContent,
              activeTab === tab.id && styles.active,
            ])}
            key={tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

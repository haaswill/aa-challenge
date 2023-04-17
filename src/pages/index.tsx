import type { NextPage } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import Gallery from '@/features/gallery/Gallery';
import styles from '@/styles/Index.module.css';

const inter = Inter({ subsets: ['latin'] });

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AgencyAnalytics Code Challenge</title>
        <meta name="description" content="AgencyAnalytics Code Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames(styles.main, inter.className)}>
        <Gallery />
      </main>
    </div>
  );
};

export default IndexPage;

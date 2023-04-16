import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AgencyAnalytics Code Challenge</title>
        <meta name="description" content="AgencyAnalytics Code Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
};

export default IndexPage;

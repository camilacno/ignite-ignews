import React from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>21 de outubro de 2021</time>
            <strong>Post title</strong>
            <p>Brief post's summary</p>
          </a>

          <a href='#'>
            <time>21 de outubro de 2021</time>
            <strong>Post title</strong>
            <p>Brief post's summary</p>
          </a>

          <a href='#'>
            <time>21 de outubro de 2021</time>
            <strong>Post title</strong>
            <p>Brief post's summary</p>
          </a>
        </div>
      </main>
    </>
  );
}

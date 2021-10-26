import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 50,
    }
  );
  console.log('response', response);

  return {
    props: {},
  };
};

import Head from 'next/head';
import React from 'react';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main>
        <div>
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

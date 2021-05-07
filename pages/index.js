import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>This is Sphinx Dance</h1>
      </Layout>
    </>
  );
}

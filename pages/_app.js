import Head from 'next/head'
import '../styles/globals.scss';
import '../styles/commons.scss';
import '../components/common/nav/Nav.scss';
import '../components/products/Card.scss';
import './products.scss';
import './products/productInDepth.scss';


import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Mozaic</title>
        <meta name="description" content="Mozaic dapp" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

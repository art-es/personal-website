import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

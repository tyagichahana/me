import '../styles/globals.scss'
import '../styles/variable.scss'

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Container from './components/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
export default MyApp

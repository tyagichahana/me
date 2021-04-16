import '../styles/globals.scss'
import '../styles/variable.scss'

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}
export default MyApp

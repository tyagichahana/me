import styles from "./Footer.module.scss";

import Container from '../Container';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div>© 2021 Chahana Tyagi</div>
          <ul className={styles.footerItem}>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/work">work</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}
export default Footer;

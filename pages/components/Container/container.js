import Header from "../Header/Header";
import styles from "./container.module.scss";

function Container(props) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentSection}>{props.children}</div>
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
      </div>
    </div>
  );
}
export default Container;

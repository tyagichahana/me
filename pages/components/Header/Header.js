import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <a href="/">Logo</a>
      </div>
      <nav className={styles.navItem}>
        <ul id="nav">
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
          <li>
            <ul className={styles.social}>
              {/* <li className={styles.email}><a href="/" id="email" title="email address goes here"/></li> */}
              <li className={styles.twitter}>
                <a
                  href="https://www.twitter.com/AdhamDannaway"
                  title="Follow me on Twitter"
                  target="_blank"
                ></a>
              </li>
              <li className={styles.linkedin}>
                <a
                  href="https://au.linkedin.com/in/adhamdannaway"
                  title="Connect with me on Linkedin"
                  target="_blank"
                ></a>
              </li>
              <li className={styles.facebook}>
                <a
                  href="https://www.facebook.com/ilikeadham"
                  title="Like me on Facebook"
                  target="_blank"
                ></a>
              </li>
              <li className={styles.medium}>
                <a
                  href="https://www.dribbble.com/adhamdannaway"
                  title="See my Dribbble shots"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;

import Container from "./components/Container/container";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <>
      <Container>
        <div className="flex spc-btwn">
          <section className="col-2">
            <h1 style={{ color: `$black` }}>contact me</h1>
            <p className="introText">
              Do you speak Hindi ? It's ok if don't, I speak english too.
            </p>
            <div>
              <ul class={styles.socialDisc}>
                <li className={styles.facebook}>
                  <a href="https://www.facebook.com" target="_blank">
                    Like me on Facebook
                  </a>
                </li>
                <li className={styles.twitter}>
                  <a href="https://www.twitter.com" target="_blank">
                    Follow me on Twitter
                  </a>
                </li>
                <li className={styles.gmail}>
                  <a href="https://www.gmail.com/" target="_blank">
                    Send email
                  </a>
                </li>
                <li className={styles.medium}>
                  <a href="https://www.dribbble.com/" target="_blank">
                    Follow me on Medium
                  </a>
                </li>
                <li className={styles.linkedin}>
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="col-2">
            <div className={styles.contactImg} />
          </section>
        </div>
      </Container>
    </>
  );
}

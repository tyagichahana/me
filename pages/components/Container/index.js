import styles from "./container.module.scss";

function Container(props) {
  return (
    <main className={styles.container}>
      <div className={styles.contentSection}>
        {props.children}
      </div>
    </main>
  );
}
export default Container;

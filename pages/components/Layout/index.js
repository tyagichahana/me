import styles from "./Layout.module.scss";

function Layout(props) {
  return (
    <main className={styles.container}>
      {props.children}
    </main>
  );
}
export default Layout;

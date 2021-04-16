import styles from "./container.module.scss";
import clsx from 'clsx';

function Container(props) {
  return (
    <div {...props} className={clsx(styles.container, props.className, {
      [styles.flex]: props.flex,
      [styles.alignCenter]: props.alignCenter,
      [styles.justifyCenter]: props.justifyCenter,
    })}>
      {props.children}
    </div>
  );
}
export default Container;

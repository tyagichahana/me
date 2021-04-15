import Header from '../Header/Header';
import styles from './container.module.scss';

function Container(props){
    return(
        <div>
            <Header/>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}
export default Container;
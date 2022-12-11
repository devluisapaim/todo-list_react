import imgPlus from "../assets/circled-plus.svg";
import styles from "../styles/entrada.module.css";

export const Entrada = () => {
    return(
        <div className={styles.entrada__container}>
            <input className={styles.entrada__input} type="text" />
            <button className={styles.entrada__inputButton}><img className={styles.entrada__inputImg} src={imgPlus} alt="" /></button>
        </div>
    );
};
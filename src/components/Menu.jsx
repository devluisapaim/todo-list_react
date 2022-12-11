import styles from "../styles/menu.module.css";


export const Menu = () => {
    return(
        <div className={styles.menu__container}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__listItem}>Feito?</li>
                <li className={styles.menu__listItem}>Tarefa</li>
                <li className={styles.menu__listItem}>Prazo</li>
                <li className={styles.menu__listItem}>Excluir</li>
            </ul>
        </div>
    );
};
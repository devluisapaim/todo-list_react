import styles from "../styles/footer.module.css";

export const Footer = () => {
    return(
        <div className={styles.footer_container}>
            <p className={styles.footer__text}>Feito com carinho por <a href="https://www.linkedin.com/in/luisacristinaferreira/">Luísa Paim</a>!</p>
        </div>
    );
};
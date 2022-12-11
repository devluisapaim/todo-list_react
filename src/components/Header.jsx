import imgHeader from "../assets/todo_logo.svg";
import imgTodo from "../assets/reminder.svg";
import styles from "../styles/header.module.css";

export const Header = () => {
    return (
        <div className={styles.header__container}>
            <img className={styles.header__title} src={imgHeader} alt="" />
            <img className={styles.header__image} src={imgTodo} alt="" />
        </div>

    );
};
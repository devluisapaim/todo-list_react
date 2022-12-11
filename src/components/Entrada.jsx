import imgPlus from "../assets/circled-plus.svg";
import imgToggle from "../assets/circled-arrow.svg";
import styles from "../styles/entrada.module.css";
import { useEffect, useState } from "react";


export const Entrada = () => {
    const [status, setStatus] = useState('block');

    function handleStatus() {
        const hidden = 'none';
        const shown = 'block';

        status === shown ? setStatus(hidden) : setStatus(shown);
    }

    return(
        <>
        <div className={styles.entrada__toggleContainer}>
            <img onClick={handleStatus} className={styles.entrada__toggleImg} src={imgToggle} alt="" />
        </div>
        <div className={styles.container} style={{display: `${status}`}}>
            <h3 className={styles.entrada__title}>Adicionar tarefa</h3>
            <div className={styles.entrada__container}>
                <input className={styles.entrada__input} type="text" placeholder="Digite a tarefa" />
                <button className={styles.entrada__inputButton}><img className={styles.entrada__inputImg} src={imgPlus} alt="" /></button>
            </div>
        </div>
        </>
    );
};
import imgDelete from "../assets/x-mark.svg";
import imgNoData from "../assets/nodata.svg";
import styles from "../styles/task.module.css";
import { useState } from "react";


export const Task = () => {

    const [statusData, setStatusData] = useState('none');
    const [statusImg, setStatusImg] = useState('block');

    return(
        <div className={styles.task__container}>
    
            <img src={imgNoData} alt="" className={styles.task__noData} />

            <div className={styles.task__containerContainer} style={{display: `${statusData}`}}>
                {/* <button className={styles.task__buttonCheck}><img className={styles.task__buttonCheckImg} src={imgCheck} alt="" /></button> */}
                <input className={styles.task__checkBox} type="checkbox" name="" id="" />
                <p className={styles.task__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className={styles.task__deadline}>XX/XX</p>
                <button className={styles.task__buttonDelete}><img className={styles.task__buttonDeleteImg} src={imgDelete} alt="" /></button>
            </div>
        </div>
    );
};
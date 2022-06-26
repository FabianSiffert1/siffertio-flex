import styles from "./AttractScreen.module.scss";
import {NavLink} from "react-router-dom";

export default function AttractScreen() {
    return (
        <main className={styles.AttractScreen}>
            <NavLink to={"/Biography"} key={"Biography"}>
            <div className={styles.textContent}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text="Siffert.io">
                        <div className={styles.glow}>Siffert.io</div>
                        <p className={styles.subtitle}>Work In Progress</p>
                    </div>
                </div>
                <div className={styles.scanlines}></div>
            </div>
            </NavLink>
        </main>
    );
}

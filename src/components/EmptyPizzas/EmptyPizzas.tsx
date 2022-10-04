import { FC } from "react";
import styles from "./EmptyPizzas.module.scss";

const EmptyPizzas: FC = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Пиццы не удалось найти!</h2>
            <p className={styles.subtitle}>Все пицеёло бегут исправлять нехватку пицц!!!</p>
        </div>
    )
}

export default EmptyPizzas

// todo сделать стили для title всех
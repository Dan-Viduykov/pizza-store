import { FC } from "react";
import Title from "@/components/UI/Title";
import styles from "./EmptyPizzas.module.scss";

const EmptyPizzas: FC = () => {
    return (
        <div className={styles.wrap}>
            <Title title={"h2"} className={styles.title}>Пиццы не удалось найти!</Title>
            <p className={styles.subtitle}>Все пицеёло бегут исправлять нехватку пицц!!!</p>
        </div>
    )
}

export default EmptyPizzas
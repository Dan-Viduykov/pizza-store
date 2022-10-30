import { FC } from "react";
import Title from "@/components/UI/Title";
import styles from "./EmptyPizzas.module.scss";
import TextField from "../UI/TextField";

const EmptyPizzas: FC = () => {
    return (
        <div className={styles.wrap}>
            <Title title={"h2"} className={styles.title}>Пиццы не удалось найти!</Title>
            <TextField textStyle={'subtitle_18'} >Все пицеёло бегут исправлять нехватку пицц!!!</TextField>
        </div>
    )
}

export default EmptyPizzas
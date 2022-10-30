import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Title from "@/components/UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzasError.module.scss";
import TextField from "../UI/TextField";

const PizzasError: FC = () => {
    const { back } = useRouter()
    useEffect(() => {setTimeout(back, 5000)}, [])

    return (
        <div className={styles.wrap}>
            <Title title={"h2"} className={styles.title}>Произошла какая-то ошибка!!! <FontAwesomeIcon icon={faFaceDizzy} /></Title>
            <TextField>Все пиццайоло и пиццамейкеры бегут исправлять ошибку!!!</TextField>
            <TextField>Возврат на страницу через 5 секунд</TextField>
        </div>
    )
}

export default PizzasError
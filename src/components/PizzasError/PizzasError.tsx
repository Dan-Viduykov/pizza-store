import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzasError.module.scss";
import { useRouter } from "next/router";

const PizzasError: FC = () => {
    const { back } = useRouter()
    
    // todo реализовать таймер возврата
    useEffect(() => {setTimeout(back, 5000)}, [])

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Произошла какая-то ошибка!!! <FontAwesomeIcon icon={faFaceDizzy} /></h2>
            <p className={styles.description}>Все пиццайоло и пиццамейкеры бегут исправлять ошибку!!!</p>
            <p>Возврат на страницу через 5 секунд</p>
        </div>
    )
}

export default PizzasError
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzasError.module.scss";

const PizzasError: FC = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Произошла какая-то ошибка!!! <FontAwesomeIcon icon={faFaceDizzy} /></h2>
            <p className={styles.description}>Все пиццайоло и пиццамейкеры бегут исправлять ошибку!!!</p>
        </div>
    )
}

export default PizzasError
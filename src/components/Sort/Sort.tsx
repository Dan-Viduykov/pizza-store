import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import SortList from "./SortList";
import styles from "./Sort.module.scss";

const Sort: FC = () => {
    return (
        <div className={styles.sort}>
            <FontAwesomeIcon className={styles.sort__icon} icon={faCaretSquareUp} />
            <span className={styles.sort__text}>Сортировка по:</span>
            <button className={styles.sort__button}>популярности</button>
            <SortList active={true} />
        </div>
    )
}

export default Sort
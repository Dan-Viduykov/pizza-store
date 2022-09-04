import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import SortList from "./SortList";
import styles from "./Sort.module.scss";

const Sort: FC = () => {
    const [ active, setActive ] = useState(false);

    const handleClick = () => {
        setActive(state => !state)
    }

    return (
        <div className={styles.sort}>
            <FontAwesomeIcon className={styles.sort__icon} icon={active ? faSquareCaretDown : faCaretSquareUp} />
            <span className={styles.sort__text}>Сортировка по:</span>
            <button className={styles.sort__button} onClick={handleClick}>популярности</button>
            <SortList active={active} />
        </div>
    )
}

export default Sort
import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import SortList from "./SortList";
import styles from "./Sort.module.scss";

const Sort: FC = () => {
    const [ active, setActive ] = useState(false);
    const [ sort, setSort ] = useState('популярности');

    const sortingCategories = {
        popularity: 'популярности',
        price: 'по цене',
        alphabet: 'по алфавиту'
    };

    const handleClick = () => {
        setActive(state => !state)
    }

    return (
        <div className={styles.sort}>
            <FontAwesomeIcon className={styles.sort__icon} icon={active ? faCaretSquareUp : faSquareCaretDown} />
            <span className={styles.sort__text}>Сортировка по:</span>
            <button className={styles.sort__button} onClick={handleClick}>{sort}</button>
            <SortList
                active={active}
                setActive={setActive}
                sorting={sortingCategories}
                setSort={setSort}
            />
        </div>
    )
}

export default Sort
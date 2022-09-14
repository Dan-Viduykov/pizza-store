import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import SortList from "./SortList";
import styles from "./Sort.module.scss";

interface SortProps {
    className?: string;
}

const Sort: FC<SortProps> = ({className}) => {
    const [ active, setActive ] = useState(false);
    const [ sort, setSort ] = useState('популярности');

    const sortingCategories = {
        rating: 'популярности',
        price: 'цене',
        title: 'алфавиту'
    };

    const handleClick = () => {
        setActive(state => !state)
    }

    return (
        <div className={`${styles.sort} ${className}`}>
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
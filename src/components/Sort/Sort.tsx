import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import styles from "./Sort.module.scss";
import { useActions } from "@/hooks/useActions";

const sortingCategories = {
    rating: 'популярности',
    price: 'цене',
    title: 'алфавиту'
};

interface SortProps {
    className?: string;
}

const Sort: FC<SortProps> = ({className}) => {
    const [ active, setActive ] = useState(false);
    const [ sort, setSort ] = useState(sortingCategories.rating);
    const { changeSotring } = useActions();

    const handleClickButton = () => {
        setActive(state => !state)
    }

    const handleClickItem = (idx: number, sortingTitle: string) => {
        setSort(sortingTitle);
        setActive(false);
        changeSotring(Object.keys(sortingCategories)[idx]);
    }

    const sortingItems = Object.values(sortingCategories).map((item: string, idx) => {
        return (
            <li key={idx} onClick={() => handleClickItem(idx, item)}>
                {item}
            </li>
        )
    })

    return (
        <div className={`${styles.sort} ${className}`}>
            <FontAwesomeIcon className={styles.sort__icon} icon={active ? faCaretSquareUp : faSquareCaretDown} />
            <span className={styles.sort__text}>Сортировка по:</span>
            <button className={styles.sort__button} onClick={handleClickButton}>{sort}</button>
            { active && <ul className={styles.list}>{sortingItems}</ul> }
        </div>
    )
}

export default Sort
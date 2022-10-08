import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import styles from "./Sort.module.scss";
import { useActions } from "@/hooks/useActions";
import { TSort } from "@/store/reducers/filter/types";

interface SortProps {
    className?: string;
}

const Sort: FC<SortProps> = ({className}) => {
    const { sortingCategories } = require('@/store/reducers/filter/constans')
    const [ active, setActive ] = useState(false);
    const [ sort, setSort ] = useState(sortingCategories.rating);
    const { changeSotring, setCurrentPage } = useActions();
    const sortRef = useRef<HTMLDivElement>(null)

    
    useEffect(() => {
        const handleClickOutside = (event: globalThis.MouseEvent): void => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setActive(false);
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const handleClickButton = () => {
        setActive(state => !state)
    }
    const handleClickItem = (event: MouseEvent<HTMLLIElement>, sortingTitle: string) => {
        // ! ================== 
        const idx = Object.values(sortingCategories).indexOf(event.currentTarget.textContent!) 
        setSort(Object.values(sortingCategories)[idx] as TSort);
        setActive(false);
        setCurrentPage(1)
        changeSotring(Object.keys(sortingCategories)[idx] as TSort);
    }

    const sortingItems = Object.values<TSort>(sortingCategories).map((item: string, idx) => {
        return (
            <li key={idx} onClick={(event) => handleClickItem(event, item)}>
                {item}
            </li>
        )
    })

    return (
        <div className={`${styles.sort} ${className}`} ref={sortRef}>
            <FontAwesomeIcon className={styles.sort__icon} icon={active ? faCaretSquareUp : faSquareCaretDown} />
            <span className={styles.sort__text}>Сортировка по:</span>
            <button className={styles.sort__button} onClick={handleClickButton}>{sort}</button>
            { active && <ul className={styles.list}>{sortingItems}</ul> }
        </div>
    )
}

export default Sort
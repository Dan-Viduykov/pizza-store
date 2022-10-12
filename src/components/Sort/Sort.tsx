import { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import { useActions } from "@/hooks/useActions";
import { sorts } from "@/store/reducers/filter/constans";
import { TSort } from "@/store/reducers/filter/types";
import styles from "./Sort.module.scss";

interface SortProps {
    className?: string;
}

const Sort: FC<SortProps> = ({className}) => {
    const [ active, setActive ] = useState(false);
    const [ sort, setSort ] = useState(sorts.rating);
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
    const handleClickItem = (idx: number, title: string) => {
        setSort(title);
        setActive(false);
        setCurrentPage(1)
        changeSotring(Object.keys(sorts)[idx] as TSort);
    }

    const sortingItems = Object.values(sorts).map((item: string, idx) => {
        return (
            <li key={idx} onClick={(event) => handleClickItem(idx, item)}>
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
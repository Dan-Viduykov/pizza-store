import { FC } from "react";
import styles from "./SortList.module.scss";

interface SortListProps {
    className?: string;
    active?: boolean;
}

const SortList: FC<SortListProps> = ({className, active = false}) => {
    const uniqid = require('uniqid')
    const sortingCategories = ['популярности', 'по цене', 'по алфавиту'];

    const sortingItems = sortingCategories.map(item => {
        return (
            <li key={uniqid()} className={styles.list__item}>
                {item}
            </li>
        )
    })

    return (
        <>
            {
                active && 
                <ul className={styles.list}>
                    {sortingItems}
                </ul>
            }
        </>
        
    )
}

export default SortList
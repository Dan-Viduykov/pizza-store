import { FC, MouseEvent, useState } from "react";
import { useActions } from "@/hooks/useActions";
import { TFilter } from "@/store/reducers/filter/types";
import styles from "./Categories.module.scss";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = ({className}) => {
    const { categories } = require('@/store/reducers/filter/constans')
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeFilter, setCurrentPage } = useActions();
    
    const handleClick = (event: MouseEvent<HTMLLIElement>) => {
        // ! ================== 
        let idx = 0;

        if (categories) {
            idx = Object.values(categories).indexOf(event.currentTarget.textContent!) 
        }

        setActiveIdx(idx);
        setCurrentPage(1)
        changeFilter(Object.keys(categories)[idx] as TFilter);
    }
    
    const items = Object.values<TFilter>(categories).map((item, idx) => {
        return (
            <li key={idx}
                className={`
                    ${styles.item}
                    ${activeIdx === idx ? styles.item_active : false}
                `}
                onClick={handleClick}
            >
                {item}
            </li>
        )
    });

    return (
        <div className={`${styles.categories} ${className}`}>
            <ul className={styles.list}>
                {items}
            </ul>
        </div>
    )
}

export default Categories
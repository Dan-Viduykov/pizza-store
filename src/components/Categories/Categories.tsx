import { FC, useState } from "react";
import { useActions } from "@/hooks/useActions";
import { catogories } from "@/store/reducers/filter/constans";
import styles from "./Categories.module.scss";
import { TFilter } from "@/store/reducers/filter/types";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = ({className}) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeFilter, setCurrentPage } = useActions();
    
    const handleClick = (idx: number) => {
        setActiveIdx(idx);
        setCurrentPage(1)
        changeFilter(Object.keys(catogories)[idx] as TFilter);
    }
    
    const items = Object.values(catogories).map((item, idx) => {
        return (
            <li key={idx}
                className={`
                    ${styles.item}
                    ${activeIdx === idx ? styles.item_active : false}
                `}
                onClick={() => handleClick(idx)}
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
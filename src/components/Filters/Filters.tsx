import { FC, useState } from "react";
import { TFilter } from "@/store/reducers/filter/types";
import { filters } from "@/store/reducers/filter/constans";
import { useActions } from "@/hooks/useActions";
import styles from "./Filters.module.scss";

interface FiltersProps {
    className?: string;
}

const Filters: FC<FiltersProps> = ({className}) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeFilter, setCurrentPage } = useActions();
    
    const handleClick = (idx: number) => {
        setActiveIdx(idx);
        setCurrentPage(1)
        changeFilter(Object.keys(filters)[idx] as TFilter);
    }
    
    const items = Object.values(filters).map((item, idx) => {
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
        <div className={`${styles.filters} ${className}`}>
            <ul className={styles.list}>
                {items}
            </ul>
        </div>
    )
}

export default Filters
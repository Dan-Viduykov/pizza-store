import { FC, useState } from "react";
import { useActions } from "@/hooks/useActions";
import styles from "./Categories.module.scss";

const catogories = {
    all :'Всe',
    meat :'Мясные',
    vegan :'Вегитарианские',
    gril :'Гриль',
    spicy :'Острые',
    closed :'Закрытые'
};

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = ({className}) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeFilter } = useActions();
    
    const handleClick = (idx: number) => {
        setActiveIdx(idx);
        changeFilter(Object.keys(catogories)[idx])
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
import { useActions } from "@/hooks/useActions";
import { FC, useState } from "react";
import styles from "./Categories.module.scss";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = ({className}) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeFilter } = useActions();
    
    const catogories = {
        all :'Всe',
        meat :'Мясные',
        vegan :'Вегитарианские',
        gril :'Гриль',
        spicy :'Острые',
        closed :'Закрытые'
    };
    
    const handleClick = (idx: number) => {
        setActiveIdx(idx);
        changeFilter(Object.keys(catogories)[activeIdx])
    }
    
    const items = Object.values(catogories).map((item, index) => {
        return (
            <li
                key={index}
                className={`
                    ${styles.item}
                    ${activeIdx === index ? styles.item_active : false}
                `}
                onClick={() => handleClick(index)}
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
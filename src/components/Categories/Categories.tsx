import { FC, useState } from "react";
import styles from "./Categories.module.scss";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = ({className}) => {
    const uniqid = require('uniqid')
    const [ activeIdx, setActiveIdx ] = useState(0)
    const catogories = ['Всe', 'Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые'];

    const handleClick = (idx: number) => {
        setActiveIdx(idx)
    }

    const items = catogories.map((item, index) => {
        return (
            <li
                key={uniqid()}
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
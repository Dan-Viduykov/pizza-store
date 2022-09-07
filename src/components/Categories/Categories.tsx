import { FC, useState } from "react";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
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
                    ${styles.categories__item}
                    ${activeIdx === index ? styles.categories__item_active : false}
                `}
                onClick={() => handleClick(index)}
            >
                {item}
            </li>
        )
    });

    return (
        <div className={styles.categories}>
            <ul className={styles.categories__list}>
                {items}
            </ul>
        </div>
    )
}

export default Categories
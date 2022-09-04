import { FC } from "react";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
    const uniqid = require('uniqid')
    const catogories = ['Всё', 'Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые'];

    const items = catogories.map(item => { 
        const id = uniqid();

        return (
            <li key={uniqid()} className={styles.categories__item}>
                <input className={styles.categories__input} id={item} type="radio" name="category" />
                <label className={styles.categories__label} htmlFor={item}>{item}</label>
            </li>
        )
    })

    return (
        <div className={styles.categories}>
            <ul className={styles.categories__list}>
                {items}
            </ul>
        </div>
    )
}

export default Categories
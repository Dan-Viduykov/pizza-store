import { FC } from "react";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
    const uuid = require('uuid')
    const catogories = ['Всё', 'Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые'];

    const createItem = (title: string) => {
        const id = uuid.v4();

        return (
            <li key={title} className={styles.categories__item}>
                <input className={styles.categories__input} id={id} type="radio" name="category" />
                <label className={styles.categories__label} htmlFor={id}>{title}</label>
            </li>
        )
    }

    return (
        <div className={styles.categories}>
            <ul className={styles.categories__list}>
                {catogories.map(createItem)}
            </ul>
        </div>
    )
}

export default Categories
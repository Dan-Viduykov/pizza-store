import { FC } from "react";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
    const catogories = ['Всё', 'Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые'];
    const items = catogories.map(item => <li key={item} className={styles.categories__item}>{item}</li>);

    return (
        <div className={styles.categories}>
            <ul className={styles.categories__list}>
                {items}
            </ul>
        </div>
    )
}

export default Categories
import Categories from "@/components/Categories";
import PizzaList from "@/components/PizzaList";
import Sort from "@/components/Sort";
import { FC } from "react";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.actions}>
                <Categories className={styles.categories} />
                <Sort className={styles.sorting} />
            </div>
            <h2 className={styles.title}>Все пиццы</h2>
            <PizzaList />
        </div>
    )
}

export default Home
import { FC } from "react";
import Sort from "@/components/Sort";
import PizzaList from "@/components/PizzaList";
import Categories from "@/components/Categories";
import styles from "./Home.module.scss";
import Pagination from "@/components/Pagination";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.actions}>
                <Categories className={styles.categories} />
                <Sort className={styles.sorting} />
            </div>
            <h2 className={styles.title}>Все пиццы</h2>
            <PizzaList />
            <Pagination />
        </div>
    )
}

export default Home
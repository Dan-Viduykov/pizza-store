import Categories from "@/components/Categories";
import PizzaList from "@/components/PizzaList";
import Sort from "@/components/Sort";
import { FC } from "react";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__actions}>
                <Categories />
                <Sort />
            </div>
            <h2 className={styles.home__title}>Все пиццы</h2>
            <PizzaList />
        </div>
    )
}

export default Home
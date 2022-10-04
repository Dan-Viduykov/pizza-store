import { FC } from "react";
import Sort from "@/components/Sort";
import PizzaList from "@/components/PizzaList";
import Categories from "@/components/Categories";
import Pagination from "@/components/Pagination";
import styles from "./Home.module.scss";
import Title from "@/components/UI/Title";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.actions}>
                <Categories className={styles.categories} />
                <Sort className={styles.sorting} />
            </div>
            <Title title={"h2"} className={styles.title}>Все пиццы</Title>
            <PizzaList />
            <Pagination />
        </div>
    )
}

export default Home
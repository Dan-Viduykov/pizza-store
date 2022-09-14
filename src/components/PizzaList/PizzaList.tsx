import { FC } from "react";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import styles from "./PizzaList.module.scss";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const PizzaList: FC = () => {
    const { filter, sorting } = useTypedSelector(state => state.filterReducer)
    const { isLoading, isError, isFetching, data: pizzas } = useGetAllPizzasQuery({sorting, filter})

    const skeletons = [...new Array(4)].map((item, idx) => <Skeleton key={idx} />)
    const pizzasElements = pizzas?.map(item => <PizzaCard key={item.id} className={styles.list__item} pizza={item} />)

    const content = isLoading || isFetching ? skeletons : pizzasElements 

    return (
        <ul className={styles.list}>
            {content}
        </ul>
    )
}

export default PizzaList
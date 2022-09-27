import { FC } from "react";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import styles from "./PizzaList.module.scss";
import PizzasError from "../PizzasError";

const PizzaList: FC = () => {
    const uniqid = require('uniqid')

    const { filter, sorting } = useTypedSelector(state => state.filterReducer)
    const { query } = useTypedSelector(state => state.searchReducer);
    const { page, limit } = useTypedSelector(state => state.paginationReducer);
    
    const { isLoading, isError, isFetching, data: pizzas } = useGetAllPizzasQuery({sorting, filter, query, page, limit})
    
    const skeletons = [...new Array(4)].map((item, idx) => <Skeleton key={idx} id={uniqid()} />)
    const pizzasElements = pizzas?.map(item => <PizzaCard key={item.id} className={styles.list__item} pizza={item} />)

    const content = isLoading || isFetching ? skeletons : pizzasElements 

    if (isError) {
        return <PizzasError />
    }

    return (
        <ul className={styles.list}>
            {content}
        </ul>
    )
}

export default PizzaList
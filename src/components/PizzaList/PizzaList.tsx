import React, { FC } from "react";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import PizzasError from "@/components/PizzasError";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import styles from "./PizzaList.module.scss";
import { useActions } from "@/hooks/useActions";

const PizzaList: FC = () => {
    const {
        filterReducer: { filter, sorting },
        searchReducer: { query },
        paginationReducer: { currentPage, itemsLimit }
    } = useTypedSelector(state => state);
    const { setItemsCount, setPageCount } = useActions()
    
    const { isLoading, isError, isFetching, data: pizzas } = useGetAllPizzasQuery({
        sorting,
        filter,
        query,
        page: currentPage,
        limit: itemsLimit
    })
    const { data } = useGetAllPizzasQuery({sorting, filter, query})
    
    if (data) {
        setItemsCount(data.length)
        setPageCount(Math.ceil(data.length / itemsLimit))
    }
    
    const skeletons = [...new Array(itemsLimit)].map((item, idx) => <Skeleton key={idx} />)
    const pizzasElements = pizzas?.map(item => <PizzaCard key={item.id} pizza={item} />)

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
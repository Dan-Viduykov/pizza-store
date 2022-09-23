import { FC } from "react";
import { useRouter } from "next/router";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import styles from "./PizzaList.module.scss";

const PizzaList: FC = () => {
    const router = useRouter();
    const uniqid = require('uniqid')

    const { filter: filterPizzas } = router.query;
    console.log(filterPizzas);

    const { filter, sorting } = useTypedSelector(state => state.filterReducer)
    const { query } = useTypedSelector(state => state.searchReducer);
    const { page } = useTypedSelector(state => state.paginationReducer);
    
    const { isLoading, isError, isFetching, data: pizzas } = useGetAllPizzasQuery({sorting, filter, query, page})
    
    const skeletons = [...new Array(4)].map((item, idx) => <Skeleton key={idx} id={uniqid()} />)
    const pizzasElements = pizzas?.map(item => <PizzaCard key={item.id} className={styles.list__item} pizza={item} />)

    const content = isLoading || isFetching ? skeletons : pizzasElements 

    return (
        <ul className={styles.list}>
            {content}
        </ul>
    )
}

export default PizzaList
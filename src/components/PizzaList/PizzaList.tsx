import { FC } from "react"
import { useGetAllPizzasQuery } from "@/services/pizza.api"
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import EmptyPizzas from "@/components/EmptyPizzas";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import PizzasError from "@/components/PizzasError";
import styles from "./PizzaList.module.scss";

const PizzaList: FC = () => {
    const { setPageCount, setAllCount } = useActions();
    const {
        filterReducer: { filter, sorting },
        paginationReducer: { currentPage, itemsLimitOnPage },
        searchReducer: { query }
    } = useTypedSelector(state => state);

    const { isLoading, isFetching, isError, data } = useGetAllPizzasQuery({
        filterBy: filter,
        sortBy: sorting,
        offset: (currentPage - 1) * itemsLimitOnPage,
        search: query
    })

    if (data) {
        setPageCount(data.count / itemsLimitOnPage),
        setAllCount(Math.ceil(data.count / itemsLimitOnPage))
    }

    const pizzaSkeletons = [...new Array(itemsLimitOnPage)].map((item, idx) => <Skeleton key={idx} />)
    const pizzasElements = data?.data.map(item => <PizzaCard key={item._id} pizza={item} />)
    const content = isLoading || isFetching ? pizzaSkeletons : pizzasElements;

    if (isError) { return <PizzasError /> }
    if (pizzasElements?.length === 0) { return <EmptyPizzas /> }

    return (
        <ul className={styles.list}>
            {content}
        </ul>
    )
}

export default PizzaList
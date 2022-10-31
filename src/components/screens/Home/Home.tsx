import { FC } from "react";
import Sort from "@/components/Sort";
import PizzaList from "@/components/PizzaList";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import styles from "./Home.module.scss";
import Title from "@/components/UI/Title";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useActions } from "@/hooks/useActions";

const Home: FC = () => {
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

    return (
        <div className={styles.home}>
            <div className={styles.actions}>
                <Filters className={styles.categories} />
                <Sort className={styles.sorting} />
            </div>
            <Title title={"h2"} className={styles.title}>Все пиццы</Title>
            <PizzaList
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                data={data}
                itemsCount={itemsLimitOnPage}
            />
            <Pagination />
        </div>
    )
}

export default Home
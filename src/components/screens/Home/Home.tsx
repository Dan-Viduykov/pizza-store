import { FC } from "react";
import Head from "next/head";

import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

import Sort from "@/components/Sort";
import PizzaList from "@/components/PizzaList";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import styles from "./Home.module.scss";
import Title from "@/components/UI/Title";

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
        <>
            <Head>
                <title>Онлайн магазин пицц</title>
                <meta name="description" content="Наши пиццы, одобрит даже твоя бабушка)" />
                <meta name="keywords" content="пицца, заказать пиццу, заказать еду, заказать покушать, " />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
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
        </>
    )
}

export default Home
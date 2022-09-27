import { FC } from "react";
import { useRouter } from "next/router";
import { useGetOnePizzaQuery } from "@/services/pizza.api";
import styles from "./Pizza.module.scss";

const Pizza: FC = () => {
    const {push, query: {id}} = useRouter();
    const { isLoading, isError, isFetching, data: pizzaData } = useGetOnePizzaQuery(Number(id))

    return (
        <div className={styles.wrap}>
            Pizza {pizzaData?.title}
        </div>
    )
}

export default Pizza
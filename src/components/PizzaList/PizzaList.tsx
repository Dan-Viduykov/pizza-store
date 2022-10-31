import { FC } from "react"
import { IServerResponce } from "@/services/pizza.types";
import EmptyPizzas from "@/components/EmptyPizzas";
import PizzaCard from "@/components/PizzaCard";
import PizzaCardSkeleton from "@/components/PizzaCard/PizzaCard.Skeleton";
import PizzasError from "@/components/PizzasError";
import styles from "./PizzaList.module.scss";

interface PizzaListProps {
    className?: string;
    isLoading?: boolean;
    isFetching?: boolean;
    isError?: boolean;
    data?: IServerResponce;
    itemsCount?: number;
}

const PizzaList: FC<PizzaListProps> = (props) => {
    const { className, isLoading, isFetching, isError, data, itemsCount = 4 } = props;

    const pizzaSkeletons = [...new Array(itemsCount)].map((item, idx) => <PizzaCardSkeleton key={idx} />)
    const pizzaElements = data?.data.map(item => <PizzaCard key={item._id} pizza={item} />)
    const content = isLoading || isFetching ? pizzaSkeletons : pizzaElements;

    if (isError) { return <PizzasError /> }
    if (pizzaElements?.length === 0) { return <EmptyPizzas /> }

    return (
        <ul className={`${styles.list} ${className}`}>
            {content}
        </ul>
    )
}


export default PizzaList
import { FC } from "react";
import styles from "./OrderList.module.scss";
import OrderItem from "../OrderItem";
import { selectBasket } from "@/store/basket/basket.slice";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface OrderListProps {
    className?: string;
}

const OrderList: FC<OrderListProps> = ({className}) => {
    const { items } = useTypedSelector(selectBasket);

    const productItems = items.map(item => {
        const uniqid = require('uniqid');

        return <OrderItem key={uniqid()} className={styles.item} product={item} />
    })

    return (
        <div className={`${styles.order} ${className}`}>
            <ul className={styles.list}>
                {productItems}
            </ul>
        </div>
    )
}

export default OrderList
import { FC } from "react";
import OrderItem from "@/components/OrderItem";
import { selectBasket } from "@/store/basket/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import styles from "./OrderList.module.scss";

interface OrderListProps {
    className?: string;
}

const OrderList: FC<OrderListProps> = ({className}) => {
    const { items } = useTypedSelector(selectBasket);

    const productItems = items.map((item, index) => {
        return <OrderItem key={index} product={item} />
    })

    return (
        <ul className={`${styles.list} ${className}`}>
            {productItems}
        </ul>
    )
}

export default OrderList
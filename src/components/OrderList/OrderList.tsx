import { FC } from "react";
import styles from "./OrderList.module.scss";
import OrderItem from "../OrderItem";

interface OrderListProps {
    className?: string;
}

const OrderList: FC<OrderListProps> = ({className}) => {
    const products = [
        {
            "id": 1,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_584x584.jpeg",
            "title": "Ветчина и сыр",
            "thickness": "традиционное",
            "size": 30,
            "price": 289,
            "category": "meat",
            "totalCount": 1, 
            "rating": 4
           },
           {
            "id": 2,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_584x584.jpeg",
            "title": "Пепперони фреш",
            "thickness": "тонкое",
            "size": 26,
            "price": 450,
            "category": "spicy",
            "totalCount": 2, 
            "rating": 4
           },
           {
            "id": 3,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            "title": "Четыре сезона",
            "thickness": "тонкое",
            "size": 30,
            "price": 419,
            "category": "meat",
            "totalCount": 2, 
            "rating": 4
           }
    ];

    const productItems = products.map(item => {
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
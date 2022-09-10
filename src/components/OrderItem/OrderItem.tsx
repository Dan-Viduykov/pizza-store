import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";
import styles from "./OrderItem.module.scss";

interface IProduct {
    id: number;
    imageUrl: string;
    title: string;
    thickness: string;
    size: number;
    price: number;
    category: string;
    totalCount: number;
    rating: number;
}

interface OrderItemProps {
    className?: string;
    product: IProduct;
}

const OrderItem: FC<OrderItemProps> = ({className, product}) => {
    const { id, imageUrl, title, thickness, size, price, totalCount, category, rating } = product

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <Image
                    src={imageUrl}
                    loader={() => imageUrl}
                    width={`100%`}
                    height={`100%`}
                    alt={title}
                />
            </div>
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.options}>{thickness}, {size} cм.</span>
            </div>
            <div className={styles.counter}>
                <button className={styles.button_count}><FontAwesomeIcon icon={faMinus}/></button>
                <span>{totalCount}</span>
                <button className={styles.button_count}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <span className={styles.price}>{price} ₽</span>
            <button className={styles.button_del}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default OrderItem
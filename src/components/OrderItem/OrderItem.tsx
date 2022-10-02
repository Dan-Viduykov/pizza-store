import { FC } from "react";
import Image from "next/image";
import { IBaksetPizza } from "@/store/basket/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useActions } from "@/hooks/useActions";
import styles from "./OrderItem.module.scss";

interface OrderItemProps {
    className?: string;
    product: IBaksetPizza;
}

const OrderItem: FC<OrderItemProps> = ({className, product}) => {
    const { id, imageUrl, title, thickness, size, price, count } = product;
    const { subtractPizza, addPizza, deletePizza } = useActions();

    const removeItem = () => subtractPizza(id)
    const addItem = () => addPizza({id} as IBaksetPizza)
    const deleteItem = () => deletePizza(id)

    if (count <= 0) {
        return <></>
    }

    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.img}>
                <Image
                    src={imageUrl}
                    loader={() => imageUrl}
                    width={`100%`}
                    height={`100%`}
                    priority={false}
                    alt={title}
                />
            </div>
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.options}>{thickness}, {size} cм.</span>
            </div>
            <div className={styles.counter}>
                <button className={styles.button_count} disabled={count <= 1} onClick={removeItem}><FontAwesomeIcon icon={faMinus}/></button>
                <span>{count}</span>
                <button className={styles.button_count} onClick={addItem}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <span className={styles.price}>{count * price} ₽</span>
            <button className={styles.button_del} onClick={deleteItem}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default OrderItem
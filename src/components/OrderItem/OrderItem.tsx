import { FC } from "react";
import Image from "next/image";
import { IBaksetPizza } from "@/store/reducers/basket/types";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";
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
                <Title title={"h4"} className={styles.title}>{title}</Title>
                <span className={styles.options}>{thickness}, {size} cм.</span>
            </div>
            <div className={styles.counter}>
                <Button
                    className={styles.button_count}
                    mode={'circle'}
                    disabled={count <= 1}
                    onClick={removeItem}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </Button>
                <span>{count}</span>
                <Button
                    className={styles.button_count}
                    mode={'circle'}
                    onClick={addItem}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <span className={styles.price}>{count * price} ₽</span>
            <Button
                className={styles.button_del}
                mode={'circle'}
                onClick={deleteItem} 
            >
                <FontAwesomeIcon icon={faXmark} />
            </Button>
        </div>
    )
}

export default OrderItem
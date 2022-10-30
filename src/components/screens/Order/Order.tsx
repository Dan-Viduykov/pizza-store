import { FC } from "react";
import { useRouter } from "next/router";
import { selectBasket } from "@/store/reducers/basket/selectors";
import OrderList from "@/components/OrderList";
import EmptyBasket from "@/components/EmptyBasket";
import Title from "@/components/UI/Title";
import { useActions } from "@/hooks/useActions";
import Button from "@/components/UI/Button";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Order.module.scss";
import TextField from "@/components/UI/TextField";

const Order: FC = () => {
    const router = useRouter();
    const { items, totalPrice } = useTypedSelector(selectBasket)
    const { deleteAllPizzas } = useActions();
    const totalItems = items.reduce((sum, item) => sum + item.count, 0)

    const handleClickDelete = () => {
        deleteAllPizzas()
    }
    const handleClickBack = () => {
        router.back()
    }

    if (!items.length) { 
        return <EmptyBasket />
    }

    return ( 
        <div className={styles.wrap}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faCartShopping} />
                <Title title={"h3"} className={styles.title}>Корзина</Title>
                <Button className={styles.button_clear} mode={"back"} onClick={handleClickDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Очистить корзину</span>
                </Button>
            </div>
            <OrderList className={styles.list} />
            <div className={styles.info}>
                <TextField className={styles.text}>Всего пицц: <span className={styles.info_black}>{totalItems} шт.</span></TextField>
                <TextField className={styles.text}>Сумма заказа: <span className={styles.info_orange}>{totalPrice} ₽</span></TextField>
            </div>
            <div className={styles.actions}>
                <Button className={styles.button_back} mode={"back"} onClick={handleClickBack}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Вернуться назад</span>
                </Button>
                <Button mode={"reverse"} className={styles.button_pay}>Оплатить сейчас</Button>
            </div>
        </div>
    )
}

export default Order
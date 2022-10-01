import { FC } from "react";
import { useRouter } from "next/router";
import { selectBasket } from "@/store/basket/selectors";
import OrderList from "@/components/OrderList";
import CardEmpty from "@/components/CardEmpty";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Order.module.scss";

const Order: FC = () => {
    const router = useRouter();
    const { items, totalPrice } = useTypedSelector(selectBasket)
    const { deleteAllPizzas } = useActions();
    const totalItems = items.reduce((sum, item) => sum + item.count, 0)

    if (!items.length) { 
        return <CardEmpty />
    }

    // todo узнать как и зачем примерняется callback и memo, и удалить все ненужные перерисовки

    return ( 
        <div className={styles.wrap}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faCartShopping} />
                <h3 className={styles.title}>Корзина</h3>
                <button className={styles.button_clear} onClick={() => deleteAllPizzas()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Очистить корзину</span>
                </button>
            </div>
            <OrderList className={styles.list} />
            <div className={styles.info}>
                <p>Всего пицц: <span className={styles.info_black}>{totalItems} шт.</span></p>
                <p>Сумма заказа: <span className={styles.info_orange}>{totalPrice} ₽</span></p>
            </div>
            <div className={styles.actions}>
                <button className={styles.button_back} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Вернуться назад</span>
                </button>
                <button className={styles.button_pay}>Оплатить сейчас</button>
            </div>
        </div>
    )
}

export default Order
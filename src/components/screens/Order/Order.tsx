import { FC } from "react";
import { useRouter } from "next/router";
import OrderList from "@/components/OrderList";
import { useActions } from "@/hooks/useActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Order.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import CardEmpty from "@/components/CardEmpty";

const Order: FC = () => {
    const router = useRouter();
    const { items, totalPrice } = useTypedSelector(state => state.basketReducer)
    const { clearAllPizzas } = useActions();

    return (
        <>
            {
                items.length ? 
                <div className={styles.wrap}>
                    <div className={styles.top}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <h3 className={styles.title}>Корзина</h3>
                        <button className={styles.button_clear} onClick={() => clearAllPizzas()}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                            <span>Очистить корзину</span>
                        </button>
                    </div>
                    <OrderList className={styles.list} />
                    <div className={styles.info}>
                        <p>Всего пицц: <span className={styles.info_black}>{items.length} шт.</span></p>
                        <p>Сумма заказа: <span className={styles.info_orange}>{totalPrice} ₽</span></p>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.button_back} onClick={() => router.back()}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <span>Вернуться назад</span>
                        </button>
                        <button className={styles.button_pay}>Оплатить сейчас</button>
                    </div>
                </div> :
                <CardEmpty />
            }
        </>
    )
}

export default Order
import { FC } from "react";
import OrderList from "@/components/OrderList";
import styles from "./Order.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Order: FC = () => {
    const router = useRouter();

    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faCartShopping} />
                <h3 className={styles.title}>Корзина</h3>
                <button className={styles.button_clear}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Очистить корзину</span>
                </button>
            </div>
            <OrderList className={styles.list} />
            <div className={styles.info}>
                <p>Всего пицц: <span className={styles.info_black}>{3} шт.</span></p>
                <p>Сумма заказа: <span className={styles.info_orange}>900 ₽</span></p>
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
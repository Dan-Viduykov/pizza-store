import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import voidBasket from "@/assets/voidBasket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import styles from "./CardEmpty.module.scss";

const CardEmpty: FC = () => {
    const router = useRouter()

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Корзина пустая <FontAwesomeIcon icon={faFaceFrownOpen} /></h2>
            <p className={styles.description}>
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <Image className={styles.image} src={voidBasket} width={300} height={255} alt="" priority={false} />
            <button className={styles.button} onClick={() => router.back()}>Вернуться назад</button>
        </div>
    )
}

export default CardEmpty
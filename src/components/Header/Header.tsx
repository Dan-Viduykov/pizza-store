import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '@/assets/logo.png'
import styles from "./Header.module.scss";
import Search from "../Search";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { selectBasket } from "@/store/basket/basket.slice";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({className}) => {
    const router = useRouter();
    const { items, totalPrice } = useTypedSelector(selectBasket);
    const totalItems = items.reduce((sum, item) => item.count + sum, 0)

    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.logo}>
                <Image
                    src={logo}
                    layout={'responsive'}
                    priority={false}
                    alt={'logo'}
                />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>REACT PIZZA</h1>
                <p className={styles.description}>самая вкусная пицца во вселенной</p>
            </div>
            <Search className={styles.search} />
            <button className={styles.button} onClick={() => router.push('/order')}>
                <span>{totalPrice} ₽</span>
                <span><FontAwesomeIcon icon={faCartShopping} /> {totalItems}</span>
            </button>
        </header>
    )
}

export default Header
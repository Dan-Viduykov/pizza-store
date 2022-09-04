import { FC } from "react";
import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '@/assets/logo.png'
import styles from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({className}) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.header__logo}>
                <Image
                    src={logo}
                    layout={'responsive'}
                    priority={false}
                    alt={'logo'}
                />
            </div>
            <div className={styles.header__info}>
                <h1 className={styles.header__title}>REACT PIZZA</h1>
                <p className={styles.header__description}>самая вкусная пицца во вселенной</p>
            </div>
            <button className={styles.header__button}>
                <span>520 ₽</span>
                <span><FontAwesomeIcon icon={faCartShopping} /> 3</span>
            </button>
        </header>
    )
}

export default Header
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { selectBasket } from "@/store/reducers/basket/selectors";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "@/components/UI/Search";
import logo from '@/assets/logo.png'
import styles from "./Header.module.scss";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({className}) => {
    const router = useRouter();
    const { items, totalPrice } = useTypedSelector(selectBasket);
    
    const handleClickOdrer = () => {
        router.push('/order');
        console.log('click');
    }
    const handleClickIcon = () => {
        router.push('/');
    }
    
    const totalItems = items.reduce((sum, item) => item.count + sum, 0);
    const search = router.pathname === '/' ? <Search className={styles.search} /> : null;

    return (
        <header className={`${styles.header} ${className}`}>
            <button onClick={handleClickIcon} className={styles.logo}>
                <Image
                    src={logo}
                    layout={'responsive'}
                    priority={false}
                    alt={'logo'}
                />
            </button>
            <div className={styles.info}>
                <Title className={styles.title} title={'h1'}>REACT PIZZA</Title>
                <p className={styles.description}>самая вкусная пицца во вселенной</p>
            </div>
            {search}
            <Button className={styles.button} mode={'reverse'} onClick={handleClickOdrer}>
                <span>{totalPrice} ₽</span>
                <span><FontAwesomeIcon icon={faCartShopping} /> {totalItems}</span>
            </Button>
        </header>
    )
}

export default Header
import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";
import voidBasket from "@/assets/voidBasket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import styles from "./EmptyBasket.module.scss";
import TextField from "../UI/TextField";

const EmptyBasket: FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className={styles.wrap}>
            <Title title={"h2"} className={styles.title}>Корзина пустая <FontAwesomeIcon icon={faFaceFrownOpen} /></Title>
            <TextField textStyle={'subtitle_18'}>
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </TextField>
            <Image className={styles.image} src={voidBasket} width={300} height={255} alt="" priority={false} />
            <Button mode={"back"} onClick={handleClick}>Вернуться назад</Button>
        </div>
    )
}

export default EmptyBasket
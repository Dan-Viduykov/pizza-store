import { FC } from "react";
import Image from "next/image";
import Modify from "./Modify";
import { IPizza } from "@/services/pizza.types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzaCard.module.scss";

interface PizzaCardProps {
    className?: string;
    pizza: IPizza;
}

const PizzaCard: FC<PizzaCardProps> = ({className, pizza}) => {
    const { id, imageUrl, title, thickness, sizes, price } = pizza;

    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <Image
                    loader={() => imageUrl}
                    src={imageUrl}
                    alt={title}
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    priority={false}
                    unoptimized
                />
            </div>
            <h4 className={styles.card__title}>{title}</h4>
            <div className={styles.card__modify}>
                <Modify className={styles.card__thickness} modifys={['тонкое', 'традиционное' ]} permittedModifys={thickness} />
                <Modify modifys={[26, 30, 40]} permittedModifys={sizes} />
            </div>
            <div className={styles.card__bottom}>
                <span className={styles.card__price}>от {price} ₽</span>
                <button className={styles.card__button}>
                    <FontAwesomeIcon icon={faPlus} />
                    Добавить 
                    <span>2</span>
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
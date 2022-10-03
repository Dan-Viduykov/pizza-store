import { FC, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { IPizza } from "@/services/pizza.types";
import { selectBasketItemById } from "@/store/basket/selectors";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { calcFinalPrice } from "@/utils/calcFinalPrice";

import Button from "@/components/Button";
import Modify from "./Modify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzaCard.module.scss";

interface PizzaCardProps {
    className?: string;
    pizza: IPizza;
}

const sizeValues = [26, 30, 40]
const thicknessValues = ['тонкое', 'традиционное' ]

const PizzaCard: FC<PizzaCardProps> = ({className, pizza}) => {
    const router = useRouter()
    const { id, imageUrl, title, price } = pizza;
    const [ activeThickness, setActiveThickness ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);
    const { addPizza } = useActions();
    
    const finalPrice = calcFinalPrice({startPrice: price, activeThickness, sizeValues, activeSize})
        
    const cardItem = useTypedSelector(selectBasketItemById(id));
    const addedCount = cardItem ? cardItem.count : 0;
    
    // !
    const handleClick = (event: any) => {
        event.stopPropagation();
        
        addPizza({
            id: `${id}/${thicknessValues[activeThickness]}/${sizeValues[activeSize]}`,
            title,
            price: finalPrice,
            imageUrl,
            thickness: thicknessValues[activeThickness],
            size: sizeValues[activeSize],
            count: 0,
        })
    }
    
    return (
        <div className={`${styles.card} ${className}`} onClick={() => router.push(`/pizza/${id}`)}>
            <div className={styles.img}>
                <Image
                    loader={() => imageUrl}
                    src={imageUrl}
                    alt={title}
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    priority={true}
                    unoptimized
                    />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.modifys}>
                <Modify
                    className={styles.modify}
                    modifys={thicknessValues}
                    active={activeThickness}
                    setActive={setActiveThickness}
                    />
                <Modify
                    className={styles.modify}
                    modifys={sizeValues}
                    active={activeSize}
                    setActive={setActiveSize}
                    />
            </div>
            <div className={styles.bottomBar}>
                <span className={styles.price}>от {finalPrice} ₽</span>
                <Button className={styles.button} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus} />
                    Добавить 
                    {addedCount > 0 && <span>{addedCount}</span>}
                </Button>
            </div>
        </div>
    )
}

export default PizzaCard

// todo почитать или посмотреть про Image next и исправить все предупреждения с ними
// todo сделать функцию создания пиццы в корзину
// todo добавить picture для всех картинок
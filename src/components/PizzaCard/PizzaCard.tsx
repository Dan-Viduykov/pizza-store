import { FC, useState } from "react";
import Image from "next/image";
import { IPizza } from "@/services/pizza.types";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Modify from "./Modify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./PizzaCard.module.scss";
import { selectCartItemById } from "@/store/basket/selectors";
// todo почитать или посмотреть про Image next и исправить все предупреждения с ними
// todo сделать функцию создания пиццы в корзину
// todo добавить picture для всех картинок

interface PizzaCardProps {
    className?: string;
    pizza: IPizza;
}

const sizeValues = [26, 30, 40]
const thicknessValues = ['тонкое', 'традиционное' ]

const PizzaCard: FC<PizzaCardProps> = ({className, pizza}) => {
    const { id, imageUrl, title, price } = pizza;
    const [ activeThickness, setActiveThickness ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);
    const { addPizza } = useActions();

    const finalPrice = Math.floor(price + 
                                (activeThickness === 0 ? 0 : price * 0.1) +
                                (sizeValues[activeSize] === 26 ? 0 : sizeValues[activeSize] === 30 ?price*0.1 : price*0.3));

    const cardItem = useTypedSelector(selectCartItemById(id));
    const addedCount = cardItem ? cardItem.count : 0;

    const handleClick = () => {
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
        <div className={`${styles.card} ${className}`}>
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
                <button className={styles.button} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus} />
                    Добавить 
                    {addedCount > 0 && <span>{addedCount}</span>}
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
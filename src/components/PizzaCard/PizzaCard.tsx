import { FC, useState } from "react";
import Image from "next/image";
import { IPizza } from "@/services/pizza.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modify from "./Modify";
import styles from "./PizzaCard.module.scss";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface PizzaCardProps {
    className?: string;
    pizza: IPizza;
}

const sizeValues = [26, 30, 40]
const thicknessValues = ['тонкое', 'традиционное' ]

const PizzaCard: FC<PizzaCardProps> = ({className, pizza}) => {
    const { id, imageUrl, title, thickness, sizes, price } = pizza;
    const [ activeThickness, setActiveThickness ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);
    const { addPizza } = useActions();

    const cardItem = useTypedSelector(state => state.basketReducer.items.find(item => item.id === id))
    const addedCount = cardItem ? cardItem.count : 0;
    
    const handleClick = () => {
        addPizza({id, imageUrl, title, thickness: thicknessValues[activeThickness], size: sizeValues[activeSize], price})
    }

    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.card__img}>
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
            <h4 className={styles.card__title}>{title}</h4>
            <div className={styles.card__modify}>
                <Modify
                    className={styles.card__thickness}
                    modifys={thicknessValues}
                    permittedModifys={thickness}
                    active={activeThickness}
                    setActive={setActiveThickness}
                />
                <Modify
                    modifys={sizeValues}
                    permittedModifys={sizes}
                    active={activeSize}
                    setActive={setActiveSize}
                />
            </div>
            <div className={styles.card__bottom}>
                <span className={styles.card__price}>от {price} ₽</span>
                <button className={styles.card__button} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus} />
                    Добавить 
                    {addedCount > 0 && <span>{addedCount}</span>}
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
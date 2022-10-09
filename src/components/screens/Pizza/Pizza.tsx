import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useGetOnePizzaQuery } from "@/services/pizza.api";
import { selectBasketItemById } from "@/store/reducers/basket/selectors";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { calcFinalPrice } from "@/utils/calcFinalPrice";

import Modify from "@/components/PizzaCard/Modify";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pizza.module.scss";

const sizeValues = [26, 30, 40]
const thicknessValues = ['тонкое', 'традиционное' ]

const Pizza: FC = () => {
    const router = useRouter();
    const { data } = useGetOnePizzaQuery(String(router.query.id));
    const { addPizza } = useActions()
    const basketItem = useTypedSelector(selectBasketItemById(String(router.query.id)))
    
    const [ activeThickness, setActiveThickness ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);
    const ItemCount = basketItem ? basketItem.count : 0;
    
    let finalPrice = data ? calcFinalPrice({startPrice: data.price, activeThickness, sizeValues, activeSize}) : 0
    
    if (!data) {
        return <p>идёт загрузка...</p>
    }
    
    const handleClickBtnBack = () => {
        router.back()
    }
    const handleClickBtnAdd = () => {
        addPizza({
            id: `${router.query.id}/${thicknessValues[activeThickness]}/${sizeValues[activeSize]}`,
            title: data.title,
            price: finalPrice,
            imageUrl: data.imageUrl,
            thickness: thicknessValues[activeThickness],
            size: sizeValues[activeSize],
            count: 0,
        })
    }

    return (
        <div className={styles.wrap}>
            <Image
                className={styles.img}
                src={data.imageUrl}
                loader={() => data.imageUrl}
                alt={data.title}
                width={`500px`}
                height={`500px`}
            />
            <div className={styles.content}>
                <Title title={"h3"} className={styles.title}>{data.title}</Title>
                <p className={styles.description}>{data.title}</p>
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
                <p className={styles.finalPrice}>стоимость за одну пиццу: <span>{finalPrice} ₽</span></p>
                <div className={styles.actions}>
                    <Button
                        className={styles.button_back}
                        mode={'back'} 
                        onClick={handleClickBtnBack}>   
                        Вернуться назад
                    </Button>
                    <Button className={styles.button_add} onClick={handleClickBtnAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                        Добавить 
                        {ItemCount > 0 && <span> {ItemCount}</span>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pizza
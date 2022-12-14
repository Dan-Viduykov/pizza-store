import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useGetPizzaByIdQuery } from "@/services/pizza.api";
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
import { changeSizeImg } from "@/utils/changeSizeImg";
import TextField from "@/components/UI/TextField";
import Head from "next/head";

const sizeValues = [26, 30, 40]
const thicknessValues = ['тонкое', 'традиционное' ]

const Pizza: FC = () => {
    const router = useRouter();
    const { data } = useGetPizzaByIdQuery(String(router.query.id));
    const { addPizza } = useActions()
    const basketItem = useTypedSelector(selectBasketItemById(String(router.query.id)))
    
    const [ activeThickness, setActiveThickness ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);
    const ItemCount = basketItem ? basketItem.count : 0;
    
    let finalPrice = data ? calcFinalPrice({startPrice: data.price, activeThickness, sizeValues, activeSize}) : 0
    
    if (!data) {
        return <TextField>идёт загрузка...</TextField>
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
        <>
            <Head>
                <title>Пицца</title>
                <meta name="description" content="Наши пиццы, одобрит даже твоя бабушка)" />
                <meta name="keywords" content="пицца, заказать пиццу, заказать еду, заказать покушать, " />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <div className={styles.wrap}>
                <picture className={styles.img}>
                    <source srcSet={changeSizeImg(data.imageUrl, '760x760')} media="(min-width: 1020px)" />
                    <source srcSet={changeSizeImg(data.imageUrl, '584x584')} media="(min-width: 940px)" />
                    <source srcSet={changeSizeImg(data.imageUrl, '366x366')} media="(min-width: 720px)" />
                    <source srcSet={changeSizeImg(data.imageUrl, '366x366')} media="(max-width: 425px)" />
                    <img src={changeSizeImg(data.imageUrl, '760x760')} alt={data.title} />
                </picture>
                <div className={styles.content}>
                    <Title title={"h3"} className={styles.title}>{data.title}</Title>
                    <TextField className={styles.description}>{data.description}</TextField>
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
                    <TextField className={styles.finalPrice}>стоимость за одну пиццу: <span>{finalPrice} ₽</span></TextField>
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
        </>
    )
}

export default Pizza
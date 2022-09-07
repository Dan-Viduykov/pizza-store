import { FC, useState } from "react";
import PizzaCard from "@/components/PizzaCard";
import Skeleton from "@/components/PizzaCard/Skeleton";
import styles from "./PizzaList.module.scss";

const PizzaList: FC = () => {
    const uniqid = require('uniqid')
    const [ isLoading, setIsLoading ] = useState(false);
    
    const pizzas = [
        {
            "id": 1,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_584x584.jpeg",
            "title": "Ветчина и сыр",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 289,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 2,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_584x584.jpeg",
            "title": "Пепперони фреш",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26
            ],
            "price": 450,
            "category": "spicy",
            "rating": 4
        },
        {
            "id": 3,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            "title": "Четыре сезона",
            "thickness": [
                "тонкое"
            ],
            "sizes": [
                30
            ],
            "price": 419,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 4,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/bf3377af7cfe4962915668d14bb8d0f4_584x584.jpeg",
            "title": "Пепперони",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 419,
            "category": "spicy",
            "rating": 4
        },
        {
            "id": 5,
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/f440c85c436a4284afad6ecfc43c1fab_584x584.jpeg",
            "title": "Чоризо фреш",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 289,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 6,
            "title": "Домашняя",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/b473722281944c78ae1d6532576f92fa_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26
            ],
            "price": 419,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 7,
            "title": "Ветчина и грибы",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_584x584.jpeg",
            "thickness": [
                "тонкое"
            ],
            "sizes": [
                30
            ],
            "price": 369,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 8,
            "title": "Цыпленок барбекю",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/57157f013c164840a24c1d49c7adb3b6_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "grill",
            "rating": 4
        },
        {
            "id": 9,
            "title": "Мясная",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/afb7bb96c6624a17b69543db3b340c86_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 10,
            "title": "Сырный цыпленок",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/01735d5a70154bd3884899030a671629_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 11,
            "title": "Овощи гриль",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/af39a1a069eb48e58156bd48b925436e_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "grill",
            "rating": 4
        },
        {
            "id": 12,
            "title": "Цыпленок ранч",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/d23af75498eb47a8a586313792da917f_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "meat",
            "rating": 4
        },
        {
            "id": 13,
            "title": "Диабло",
            "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/2ac448e39ba24623a33c1d8d50b69ef8_584x584.jpeg",
            "thickness": [
                "тонкое",
                "традиционное"
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 469,
            "category": "grill",
            "rating": 4
        }
    ]

    const skeletons = [...new Array(4)].map((item, idx) => <Skeleton key={idx} />)
    const pizzasElements = pizzas.map(item => <PizzaCard key={item.id} className={styles.list__item} pizza={item} />)

    const content = isLoading ? skeletons : pizzasElements 

    return (
        <ul className={styles.list}>
            {content}
        </ul>
    )
}

export default PizzaList
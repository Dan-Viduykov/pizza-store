import { FC } from "react";
import PizzaCard from "@/components/PizzaCard";
import styles from "./PizzaList.module.scss";

const PizzaList: FC = () => {
    const uniqid = require('uniqid')
    const pizzas = [
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Чизбургер-пицца',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26, 30, 40],
            startPrice: 395,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Сырная',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26],
            startPrice: 450,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Креветки по-азиатски',
            thickness: ['тонкое'],
            types: [0, 1],
            sizes: [30],
            startPrice: 290,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Сырный цыпленок',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26, 30, 40],
            startPrice: 385,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Чизбургер-пицца',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26, 30, 40],
            startPrice: 395,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Сырная',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26],
            startPrice: 450,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Креветки по-азиатски',
            thickness: ['тонкое'],
            types: [0, 1],
            sizes: [30],
            startPrice: 290,
            category: 'grill',
            rating: 4
        },
        {
            id: uniqid(),
            image: "https://cdn.dodostatic.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg",
            title: 'Сырный цыпленок',
            thickness: ['тонкое', 'традиционное'],
            types: [0, 1],
            sizes: [26, 30, 40],
            startPrice: 385,
            category: 'grill',
            rating: 4
        }
    ]

    const items = pizzas.map(item => <PizzaCard key={item.id} className={styles.list__item} pizza={item} />)

    return (
        <ul className={styles.list}>
            {items}
        </ul>
    )
}

export default PizzaList
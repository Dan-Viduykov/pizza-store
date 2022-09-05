import { FC } from "react";
import PizzaCard from "@/components/PizzaCard";
import pizzaImg from '@/assets/pizza.png'
import styles from "./PizzaList.module.scss";

const PizzaList: FC = () => {
    const uniqid = require('uniqid')
    const pizzas = [
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Чизбургер-пицца',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            startPrice: 395
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Сырная',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26],
            startPrice: 450
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Креветки по-азиатски',
            thickness: ['тонкое'],
            sizes: [30],
            startPrice: 290
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Сырный цыпленок',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            startPrice: 385
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Чизбургер-пицца',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            startPrice: 395
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Сырная',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26],
            startPrice: 450
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Креветки по-азиатски',
            thickness: ['тонкое'],
            sizes: [30],
            startPrice: 290
        },
        {
            id: uniqid(),
            image: pizzaImg,
            name: 'Сырный цыпленок',
            thickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            startPrice: 385
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
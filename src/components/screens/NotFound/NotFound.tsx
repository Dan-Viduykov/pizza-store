import { FC } from "react";
import Image from "next/image";
import notFoundImage from "@/assets/404.gif"
import styles from "./NotFound.module.scss";

const NotFound: FC = () => {
    return (
        <div className={styles.wrap}>
            <p className={styles.code}>404</p>
            <h1 className={styles.title}>Страница не найдена</h1>
            <p className={styles.description}>Скорее всего, вы попали сюда из-за опечатки в адресе страницы. Попробуйте вернуться на главную или свяжитесь с администрацией сайта.</p>
            <Image
                className={styles.img}
                src={notFoundImage}
                layout={"responsive"}
                alt=''
            />
            <span>эта картинка мне понравилась больше других😘</span>
        </div>
    )
}

export default NotFound
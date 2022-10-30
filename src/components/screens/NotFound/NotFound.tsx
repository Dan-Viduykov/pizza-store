import { FC } from "react";
import Image from "next/image";
import notFoundImage from "@/assets/404.gif"
import styles from "./NotFound.module.scss";
import TextField from "@/components/UI/TextField";

const NotFound: FC = () => {
    return (
        <div className={styles.wrap}>
            <TextField className={styles.code}>404</TextField>
            <h1 className={styles.title}>Страница не найдена</h1>
            <TextField className={styles.description}>
                Скорее всего, вы попали сюда из-за опечатки в адресе страницы. 
                Попробуйте вернуться на главную или свяжитесь с администрацией сайта.
            </TextField>
            <Image
                className={styles.img}
                src={notFoundImage}
                layout={"responsive"}
                alt=''
            />
            <TextField textStyle={'subtitle'}>эта картинка мне понравилась больше других😘</TextField>
        </div>
    )
}

export default NotFound
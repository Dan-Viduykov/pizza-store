import { FC, PropsWithChildren } from "react";
import styles from "./TextField.module.scss";

const enum TextTypes {
    'text_14',
    'filter_white',
    'subtitle',
    'button',
    'button_primary',
    'subtitle_18',
}

interface TextFieldProps {
    textStyle?: keyof typeof TextTypes;
    className?: string;
}

const TextField: FC<PropsWithChildren<TextFieldProps>> = (props) => {
    const { children, textStyle = 'text_14', className } = props;

    return (
        <p className={`${styles.text} ${styles[textStyle]} ${className}`}>
            {children}
        </p>
    )
}

export default TextField
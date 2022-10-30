import { FC, PropsWithChildren, TextareaHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

const enum TextTypes {
    'text_14',
    'filter_white',
    'subtitle',
    'button',
    'button_primary',
    'subtitle_18',
}

interface TextFieldProps extends TextareaHTMLAttributes<HTMLParagraphElement> {
    textStyle?: keyof typeof TextTypes;
}

const TextField: FC<PropsWithChildren<TextFieldProps>> = (props) => {
    const { children, textStyle = 'text_14', className, ...rest } = props;

    return (
        <p className={`${styles.text} ${styles[textStyle]} ${className}`} {...rest}>
            {children}
        </p>
    )
}

export default TextField
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    mode?: 'reverse' | 'circle' | 'back';
}

const Button: FC<ButtonProps> = ({className, children, mode, ...rest}) => {
    const classReverse = mode === 'reverse' ? styles.button_reverse : null;
    const classCircle = mode === 'circle' ? styles.button_circle : null;
    const classBack = mode === 'back' ? styles.button_back : null;

    const modify = `${classReverse} ${classCircle} ${classBack}`;

    const classNames = `${styles.button} ${className} ${modify}`
    
    return (
        <button className={classNames} {...rest}>
            {children}
        </button>
    )
}

export default Button
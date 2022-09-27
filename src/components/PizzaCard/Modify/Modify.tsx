import { FC } from "react";
import styles from "./Modify.module.scss";

interface ModifyProps {
    className?: string;
    modifys: string[] | number[];
    active: number;
    setActive: (idx: number) => void;
}

const Modify: FC<ModifyProps> = ({className, modifys, active, setActive}) => {
    const handleClick = (idx: number) => {
        setActive(idx);
    }
    
    const items = modifys.map((item, index) => {
        return (
            <li
                key={index}
                onClick={() => handleClick(index)}
                className={`
                    ${styles.modifys__item}
                    ${active === index ? styles.modifys__item_active : null}
                `}
            >
                {item}
            </li>
        )
    })

    return (
        <ul className={`${styles.modifys} ${className}`}>
            {items}
        </ul>
    )
}

export default Modify
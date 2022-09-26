import { FC } from "react";
import styles from "./Modify.module.scss";

interface ModifyProps {
    className?: string;
    modifys: string[] | number[];
    permittedModifys: string[] | number[];
    active: number;
    setActive: (idx: number) => void;
}

const Modify: FC<ModifyProps> = ({className, permittedModifys, modifys, active, setActive}) => {
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
                    ${permittedModifys[index] !== item ? styles.modifys__item_disabled : null}
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
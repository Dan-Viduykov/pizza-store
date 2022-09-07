import { FC, useState } from "react";
import styles from "./Modify.module.scss";

interface ModifyProps {
    className?: string;
    modifys: string[] | number[];
    permittedModifys: string[] | number[];
}

const Modify: FC<ModifyProps> = ({className, permittedModifys, modifys}) => {
    const [ active, setActive ] = useState(0);

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
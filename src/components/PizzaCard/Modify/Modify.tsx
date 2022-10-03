import { FC, MouseEvent } from "react";
import styles from "./Modify.module.scss";

interface ModifyProps {
    className?: string;
    modifys: string[] | number[];
    active: number;
    setActive: (idx: number) => void;
}

const Modify: FC<ModifyProps> = ({className, modifys, active, setActive}) => {

    const handleClick = (event: MouseEvent<HTMLLIElement>, idx: number) => {
        event.stopPropagation();
        setActive(idx)
    }

    const items = modifys.map((item, index) => {
        return (
            <li
                key={index}
                onClick={(e) => handleClick(e, index)}
                className={`${styles.item} ${active === index ? styles.item_active : null}`}
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
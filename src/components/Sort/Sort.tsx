import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import styles from "./Sort.module.scss";

const Sort: FC = () => {
    return (
        <div className={styles.sort}>
            <FontAwesomeIcon icon={faCaretSquareUp} />
        </div>
    )
}

export default Sort
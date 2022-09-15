import { FC, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import { useActions } from "@/hooks/useActions";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({className}) => {
    const [ value, setValue ] = useState('');

    return (
        <div className={`${styles.wrap} ${className}`}>   
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск пиццы ..."
                onChange={(e) => setValue(e.target.value)}
                value={value} />
        </div>
    )
}

export default Search
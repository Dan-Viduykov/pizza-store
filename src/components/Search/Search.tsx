import { ChangeEvent, FC, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActions } from "@/hooks/useActions";
import { useDebounce } from "@/hooks/useDebonce";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({className}) => {
    const { changeQuery } = useActions();
    const [ value, setValue ] = useState('')
    const { debouncedValue, setDebouncedValue } = useDebounce(value.trim(), 300);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    changeQuery(debouncedValue)

    return (
        <div className={`${styles.wrap} ${className}`}>   
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск пиццы ..."
                onChange={handleChange}
                value={value} />
        </div>
    )
}

export default Search
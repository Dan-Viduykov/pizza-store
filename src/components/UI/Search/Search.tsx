import { ChangeEvent, FC, useState } from "react";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActions } from "@/hooks/useActions";
import { useDebounce } from "@/hooks/useDebonce";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({className}) => {
    const { setQuery , setCurrentPage } = useActions();
    const [ value, setValue ] = useState('')
    const { debouncedValue, setDebouncedValue } = useDebounce(value.trim(), 300);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setCurrentPage(1)
    }
    const handleClick = () => {
        setValue('')
    }
    
    setQuery(debouncedValue)

    return (
        <div className={`${styles.wrap} ${className}`}>   
            <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск пиццы ..."
                onChange={handleChange}
                value={value} />
            { value 
                ?
                <button>
                    <FontAwesomeIcon
                        className={styles.iconClear}
                        icon={faXmark}
                        onClick={handleClick}
                    />    
                </button>
                : null
            }
        </div>
    )
}

export default Search
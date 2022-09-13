import { useActions } from "@/hooks/useActions";
import { FC, useState } from "react";
import styles from "./SortList.module.scss";

interface SortListProps {
    className?: string;
    active?: boolean;
    sorting: {
        popularity: string,
        price: string,
        alphabet: string
    };
    setSort: (sortState: string) => void;
    setActive: (active: boolean) => void;
}

const SortList: FC<SortListProps> = ({className, active = false, sorting, setSort, setActive}) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { changeSotring } = useActions();
    
    const handleClick = (index: number, sortingTitle: string) => {
        setActiveIdx(index);
        setSort(sortingTitle);
        setActive(false);

        const sortKey = Object.keys(sorting)[index];
        changeSotring(sortKey);
    }

    const sortingItems = Object.values(sorting).map((item: string, index) => {
        const uniqid = require('uniqid');

        return (
            <li key={uniqid()} onClick={() => handleClick(index, item)}>
                {item}
            </li>
        )
    })

    return (
        <> {active && <ul className={styles.list}>{sortingItems}</ul>} </>
    )
}

export default SortList
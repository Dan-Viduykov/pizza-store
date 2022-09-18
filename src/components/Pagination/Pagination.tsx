import { FC } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useActions } from "@/hooks/useActions";

const Pagination: FC = () => {
    const { setPage } = useActions()

    const handleClick = (event: any) => {
        setPage(event.selected + 1);
    }

    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            onPageChange={handleClick}
            pageRangeDisplayed={4}
            pageCount={4}
        />
    )
}

export default Pagination
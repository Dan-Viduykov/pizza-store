import { FC } from "react";
import ReactPaginate from "react-paginate";
import { selectPagination } from "@/store/pagination/selectors";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.module.scss";

const Pagination: FC = () => {
    const { itemsLimit, pageCount } = useTypedSelector(selectPagination)
    const { setCurrentPage } = useActions();

    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            onPageChange={(event) => setCurrentPage(event.selected + 1)}
            pageRangeDisplayed={itemsLimit}
            pageCount={pageCount}
        />
    )
}

export default Pagination
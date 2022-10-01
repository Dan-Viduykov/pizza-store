import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { selectPagination } from "@/store/pagination/selectors";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.module.scss";

const Pagination: FC = () => {
    const { itemsLimit } = useTypedSelector(selectPagination)
    const { data } = useGetAllPizzasQuery({})
    const { setCurrentPage } = useActions()

    let pageCount = 1;

    if (data) {
        pageCount = data.length / itemsLimit
    }

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
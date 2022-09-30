import { FC } from "react";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import ReactPaginate from "react-paginate";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.module.scss";

const Pagination: FC = () => {
    const { limit } = useTypedSelector(state => state.paginationReducer)
    const { data } = useGetAllPizzasQuery({})
    const { setPage } = useActions()

    let pageCount = 1;

    if (data) {
        pageCount = data.length / limit
    }

    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            onPageChange={(event) => setPage(event.selected + 1)}
            pageRangeDisplayed={limit}
            pageCount={pageCount}
        />
    )
}

export default Pagination
import { FC } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useActions } from "@/hooks/useActions";
import { useGetAllPizzasQuery } from "@/services/pizza.api";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const Pagination: FC = () => {
    const { limit } = useTypedSelector(state => state.paginationReducer)
    const { data } = useGetAllPizzasQuery({})
    const { setPage } = useActions()

    let pageCount = 1;

    if (data) {
        pageCount = data.length / limit
    }

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
            pageRangeDisplayed={limit}
            pageCount={pageCount}
        />
    )
}

export default Pagination
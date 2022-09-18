import { FC } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination: FC = () => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            onPageChange={console.log}
            pageRangeDisplayed={5}
            pageCount={3}
        />
    )
}

export default Pagination
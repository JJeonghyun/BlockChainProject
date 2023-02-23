import Pagination from "react-js-pagination";
import "./Paging.css";

export const Paging = ({ page, count, setPage, pageNumber }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={pageNumber}
      totalItemsCount={count}
      pageRangeDisplayed={7}
      prevPageText={"◀"}
      nextPageText={"▶"}
      onChange={setPage}
    />
  );
};

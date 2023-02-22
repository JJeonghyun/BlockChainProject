import Pagination from "react-js-pagination";
import "./Paging.css";

export const Paging = ({ page, count, setPage, pageNumber }) => {
  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={pageNumber} // 한페이지 당 보여줄 아이템의 개수
      totalItemsCount={count} // 아이템의 총 개수
      pageRangeDisplayed={7} // 페이징네이션 목록 보여줄 범위
      prevPageText={"◀"} // '이전'을 나타내는 텍스트(모양)
      nextPageText={"▶"} // '다음'을 나타내는 텍스트(모양)
      onChange={setPage} // 페이지가 바뀌는 걸 핸들링할 함수
    />
  );
};

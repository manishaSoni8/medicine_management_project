import React from "react";
 
const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
          </li>
 
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
 
export default Pagination;
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const setPage = (page) => onPageChange(page);

    return (
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>

        <div className="pagination-pages">
            {
                [...Array(totalPages)].map((page, index) => <p onClick={() => setPage(index + 1)} key={index} className={`${(index + 1) === currentPage ? "selected" : ""}`}>{index + 1}</p>)
            }
        </div>
        
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };

export default Pagination;
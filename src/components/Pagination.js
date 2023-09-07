const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPage = 5
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

    return (
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>

        {
            totalPages > maxPage ?
            <>
                {[...Array(totalPages)].slice(0, maxPage).map((page, index) => <p key={index} className={`${(index + 1) === currentPage ? "selected" : ""}`}>{index + 1}</p>)}
                ...
            </>
            :
            [...Array(totalPages)].map((page, index) => <p key={index} className={`${(index + 1) === currentPage ? "selected" : ""}`}>{index + 1}</p>)
        }
        
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };

export default Pagination;
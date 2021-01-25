const SearchBox = ({
  totalCount,
  pageCount,
  queryString,
  onTotalChange,
  onQueryChange,
}) => {
  return (
    <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
      <div className="d-flex align-items-center flex-grow-1">
        <label htmlFor="queryString" className="me-2 fw-bold text-secondary">
          Search
        </label>
        <input
          id="queryString"
          className="form-control form-control-sm me-2"
          type="text"
          value={queryString}
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center">
        <label htmlFor="pageCount" className="me-2 fw-bold text-secondary">
          Show
        </label>
        <input
          id="pageCount"
          className="form-control form-control-sm text-center me-2"
          type="number"
          min="1"
          max="100"
          value={pageCount}
          onChange={(event) => {
            onTotalChange(event.target.value);
          }}
        />
      </div>
      <div>
        <b className="me-2 text-secondary">Total:</b>
        {totalCount}
      </div>
    </div>
  );
};

export default SearchBox;

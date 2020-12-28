import { useState } from "react";

const Searchbar = () => {
  const [searchParemeter, setSearchParemeter] = useState("");

  const handleSearchBtn = () => {
    console.log(searchParemeter);
  }

  return (
    <div>
      <h4>Find jobs</h4>
      <div className="row">
        <div className="col-9">
          <input
            onChange={(e) => setSearchParemeter(e.target.value)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="col-3 mr-auto">
          <button onClick={handleSearchBtn} disabled={searchParemeter.length < 3} className="btn btn-success">
            Lookup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

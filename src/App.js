import { useState } from "react";
import JobDescriptionRenderer from "./components/JobDescriptionRenderer";
import JobsRenderer from "./components/JobsRenderer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Searchbar />
            <hr />
            <JobsRenderer setSelectedJob={setSelectedJob} />
          </div>
          {selectedJob ? (
            <div className="col-sm-12 col-md-12 col-lg-8">
              <JobDescriptionRenderer selectedJob={selectedJob} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;

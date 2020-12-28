import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from "./JobCard"

const JobsRenderer = ({ setSelectedJob }) => {
    const [loading, setLoading] = useState(false)
    const [jobs, setJobs] = useState([])

    const getJobs = async () => {
        setLoading(true);
        
        await axios.get('http://localhost:4000/jobs')
        .then(res => setJobs(res.data))
        .catch(err => console.log(err));

        setLoading(false);
    }

    const renderJobs = () => {
        return jobs.map(job => <JobCard key={job.id} job={job} setSelectedJob={setSelectedJob} />)
    }

    useEffect(() => {
        getJobs();
        scrollToTop();
    }, [])

    const scrollToTop = () => {
        let element = document.querySelector(".jobs-renderer");
        if (element) {
            element.scrollTop = 0;
        }
    }

    return (
        <div className="jobs-renderer">
           { loading ? <p>Loading...</p> : renderJobs()}
        </div>
    )
}

export default JobsRenderer;

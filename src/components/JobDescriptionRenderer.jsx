import ReactHtmlParser from 'react-html-parser';

const JobDescriptionRenderer = ({selectedJob}) => {
    return (
        <div id="JobDescriptionRenderer">
            <h2>{selectedJob.title}</h2>
            <hr/>
            <div>
                { ReactHtmlParser(selectedJob.description) }
            </div>
        </div>
    )
}

export default JobDescriptionRenderer;

import { formatHtmlToString, trimWithDots } from "../utilities";

const JobCard = (props) => {
  let { title, description } = props.job;
  let formatedDescription = formatHtmlToString(description);
  let trimmedDescription = trimWithDots(formatedDescription, 0, 110);

  const handleCardClick = () => {
    let jobDescriptionElement = document.querySelector("#JobDescriptionRenderer");
    if (jobDescriptionElement && window.scrollY > 0) {
      jobDescriptionElement.scrollIntoView();
    }
    props.setSelectedJob(props.job)
  }

  return (
    <div className="card my-2">
      <div className="card-body" onClick={handleCardClick}>
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ trimmedDescription }</p>
      </div>
    </div>
  );
};

export default JobCard;

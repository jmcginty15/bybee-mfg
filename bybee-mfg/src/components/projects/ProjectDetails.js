import './ProjectDetails.css';

const ProjectDetails = ({ title, description }) => {
    return (
        <div className="ProjectDetails">
            <h3>{title}</h3>
            <p className="ProjectDetails-text">{description}</p>
        </div>
    )
}

export default ProjectDetails;
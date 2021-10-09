import { useState, useEffect } from 'react';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    const [mobile, setMobile] = useState(window.innerWidth < 768);
    useEffect(() => window.addEventListener('resize', handleResize));

    const handleResize = () => {
        if (mobile && window.innerWidth >= 768) setMobile(false);
        else if (!mobile && window.innerWidth < 768) setMobile(true);
    }

    return (
        <div className="ProjectCard">
            {Math.round(index / 2) * 2 === index || window.innerWidth < 768 ? <ProjectImage image={project.image} /> : <ProjectDetails title={project.title} description={project.description} />}
            {Math.round(index / 2) * 2 === index || window.innerWidth < 768 ? <ProjectDetails title={project.title} description={project.description} /> : <ProjectImage image={project.image} />}
        </div>
    )
}

export default ProjectCard;
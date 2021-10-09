import ProjectCard from './ProjectCard';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import './Projects.css';

const projects = [
    {
        title: 'Project 1',
        description: 'Project completed for Example Company. Rundown of what you did, something the customer said about it, other stuff, something unique about the project, etc etc.',
        image: img1
    },
    {
        title: 'Project 2',
        description: 'Project completed for Example Company. Rundown of what you did, something the customer said about it, other stuff, something unique about the project, etc etc.',
        image: img2
    },
    {
        title: 'Project 3',
        description: 'Project completed for Example Company. Rundown of what you did, something the customer said about it, other stuff, something unique about the project, etc etc.',
        image: img3
    },
    {
        title: 'Project 4',
        description: 'Project completed for Example Company. Rundown of what you did, something the customer said about it, other stuff, something unique about the project, etc etc.',
        image: img4
    },
    {
        title: 'Project 5',
        description: 'Project completed for Example Company. Rundown of what you did, something the customer said about it, other stuff, something unique about the project, etc etc.',
        image: img5
    }
];

const Projects = () => {
    return (
        <div className="Projects">
            <h1>Check out some of our completed projects:</h1>
            <div className="Projects-container">
                {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
        </div>
    )
}

export default Projects;
import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({ title, link, photo }) => {
    const history = useHistory();
    const followLink = (route) => history.push(route);

    return (
        <div className="ServiceCard" style={{ backgroundImage: `url(${photo})` }}>
            <div className="ServiceCard-cover" onClick={() => followLink(`/services${link}`)}>
                <div className="ServiceCard-title">
                    <h2>{title}</h2>
                    <h5>Click to learn more</h5>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
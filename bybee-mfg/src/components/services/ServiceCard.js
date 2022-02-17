import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({ title, link, photo, clickable = true, machiningService = true }) => {
    const history = useHistory();
    const followLink = (route) => { if (clickable) history.push(route); }

    return (
        <div className="ServiceCard" style={{ backgroundImage: `url(${photo})` }}>
            <div className={`ServiceCard-cover${!clickable ? '-unclickable' : ''}`} onClick={() => followLink(`${machiningService ? '/machining' : ''}${link}`)}>
                <div className="ServiceCard-title">
                    <h2>{title}</h2>
                    <h5>{clickable ? 'Click to learn more' : 'Coming soon!'}</h5>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
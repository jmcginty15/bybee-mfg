import { Button } from 'reactstrap';
import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({ title, link, photo }) => {
    const history = useHistory();
    const followLink = (route) => history.push(route);

    return (
        <div className="ServiceCard">
            <p>*Picture of a related machine here*</p>
            <h4>{title}</h4>
            <Button className="ServiceCard-button" outline onClick={() => followLink(`/services${link}`)}>Learn more</Button>
        </div>
    )
}

export default ServiceCard;
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './Banner.css';

const Banner = ({ title, text, photo }) => {
    const history = useHistory();
    const followLink = (route) => history.push(route);

    return (
        <div className="Banner">
            <div className="Banner-photo-container">
                <img className="Banner-photo" src={photo} />
            </div>
            <div className="Banner-info">
                <h3>{title}</h3>
                {text.map(paragraph => <p className="Banner-text" key={paragraph.slice(0, 10)}>{paragraph}</p>)}
                <p>*This text was copied straight from the JD Machine site for a placeholder. Obviously we'll have to come up with your own little blurb.*</p>
                <Button className="Banner-button" outline onClick={() => followLink('/contact')}>Ask us a question</Button>
                <Button className="Banner-button" outline onClick={() => followLink('/quote')}>Get a quote</Button>
            </div>
        </div>
    )
}

export default Banner;
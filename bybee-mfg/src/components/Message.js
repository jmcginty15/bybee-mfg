import { Button } from 'reactstrap';
import './Message.css';

const Message = ({ success, type, reset }) => {
    return (
        <div className="Message">
            <h2>{success ? 'Success!' : 'Something went wrong'}</h2>
            <p>{success ? (
                <span>We have received your {type === 'quote' ? 'quote request' : 'question or comment'} and will be in touch by email or phone.</span>
            ) : 'Please try again later or contact us by phone at (435) 732-1433.'}</p>
            <Button color="success" type="button" onClick={reset}>Ok</Button>
        </div>
    )
}

export default Message;

import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import Map from './Map';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <ContactCard />
            <div className="Contact-lower">
                <ContactForm />
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDy-6cOJ0da4U4KIVYr6q6nNekTjSMvJxk"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="Map" />}
                    mapElement={<div style={{ height: `100%` }} />} />
            </div>
        </div>
    )
}

export default Contact;
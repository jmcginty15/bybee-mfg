import './ContactCard.css';

const ContactCard = () => {
    return (
        <div className="ContactCard">
            <div className="ContactCard-left">
                <h3>Looking for quality and experience? Call us first!</h3>
                <hr />
                <p className="ContactCard-text">
                    We pride ourselves on our tradition of integrity, innovation, and ability to provide
                    services that exceed expectations. Our team strives to always adhere to high moral
                    principles and professional standards.
                </p>
            </div>
            <div className="ContactCard-right">
                <h5>Bybee <small>LLC</small></h5>
                <p>
                    210 E 1000 S #4<br />
                    Brigham City, Utah 84302<br />
                    Line 1: (801) 589-1281<br />
                    Line 2: (801) 821-1197<br />
                    bybeemanufacturing@gmail.com
                </p>
                <a id="ContactCard-link" href="https://www.google.com/maps/dir//210+E+1000+S,+Brigham+City,+UT+84302/@41.4881448,-112.0145945,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87537a901852437d:0xe60aeb8821bd0f41!2m2!1d-112.0124724!2d41.4881434?hl=en-US" target="_blank" rel="noreferrer">Directions</a>
            </div>
        </div>
    )
}

export default ContactCard;
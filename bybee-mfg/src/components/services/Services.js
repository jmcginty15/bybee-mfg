import Banner from './Banner';
import ServiceCard from './ServiceCard';
import overviewPhoto from './images/overview.jpg';
import cncMilling from './images/cnc-milling.jpg';
import cncTurning from './images/cnc-turning.jpg';
import fabrication from './images/fabrication.jpg';
import './Services.css';

const overview = {
    title: 'Overview',
    text: ['Utilizing advanced technology, JD Machine achieves an amazingly high level of component parts throughput for medium- to high-complexity production runs. We mainly serve the aerospace, defense, medical, energy and commercial industries, and our capabilities include precision CNC machining, sheet metal fabrication, assembly, testing and more. We engineer our processes offline using powerful CAD/CAM and CNC program simulation software with up-to-the-minute tracking of OEE and throughput on every machine. The combination of the latest technologies and our highly trained, skilled and motivated team ensures world-class quality at extremely competitive pricing.'],
    // text: ['Yeethole'],
    photo: overviewPhoto
};

const services = [
    {
        title: 'CNC Milling',
        link: '/cnc-milling',
        photo: cncMilling
    },
    {
        title: 'CNC Turning',
        link: '/cnc-turning',
        photo: cncTurning
    },
    {
        title: 'Fabrication',
        link: '/fabrication',
        photo: fabrication
    }
];

const Services = () => {
    return (
        <div className="Services">
            <h1 className="Services-title">Services We Offer</h1>
            <Banner title={overview.title} text={overview.text} photo={overview.photo} />
            <div className="Services-list">
                {services.map(service => <ServiceCard title={service.title} link={service.link} photo={service.photo} key={service.link} />)}
            </div>
        </div>
    )
}

export default Services;
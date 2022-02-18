import Banner from './Banner';
import ServiceCard from './ServiceCard';
import overviewPhoto from './images/overview.jpg';
import cncMilling from './images/cnc-milling.jpg';
import cncTurning from './images/cnc-turning.jpg';
import fabrication from './images/fabrication.jpg';
import './Services.css';

const overview = {
    title: 'Overview',
    text: ['Using innovative processes, Bybee Manufacturing specializes in low-to-medium production runs. For over two decades, we have strived to produce quality machining and fabrication services to our customers in mining, entertainment, and other industries. Our capabilities include precision CNC milling, CNC turning, and general fabrication. We capitalize on using new technologies and processes to continually improve our cycle times as well as to reduce waste so that our customers can enjoy more competitive pricing.'],
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
            <h1 className="Services-title">Machine Shop</h1>
            <Banner title={overview.title} text={overview.text} photo={overview.photo} />
            <div className="Services-list">
                {services.map(service => <ServiceCard title={service.title} link={service.link} photo={service.photo} key={service.link} />)}
            </div>
        </div>
    )
}

export default Services;
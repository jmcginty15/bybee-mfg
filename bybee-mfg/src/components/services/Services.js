import Banner from './Banner';
import ServiceCard from './ServiceCard';
import overviewPhoto from './images/overview.jpg';
import cncMilling from './images/cnc-milling.jpg';
import cncTurning from './images/cnc-turning.jpg';
import fabrication from './images/fabrication.jpg';
import './Services.css';

const overview = {
    title: 'Overview',
    text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Consequat semper viverra nam libero justo laoreet sit amet. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Bibendum est ultricies integer quis auctor. Natoque penatibus et magnis dis. Id diam vel quam elementum pulvinar etiam non. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sed felis eget velit aliquet sagittis id consectetur purus. Odio ut enim blandit volutpat. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Purus viverra accumsan in nisl nisi scelerisque eu.',
        'Dui nunc mattis enim ut. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Habitant morbi tristique senectus et netus et. Enim nec dui nunc mattis enim. Eget arcu dictum varius duis at consectetur lorem donec massa. Ornare suspendisse sed nisi lacus sed. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed cras ornare arcu dui vivamus arcu felis. Tellus at urna condimentum mattis pellentesque id nibh tortor. Pellentesque elit eget gravida cum sociis natoque penatibus et. Semper feugiat nibh sed pulvinar proin. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Donec massa sapien faucibus et. Duis ut diam quam nulla.'
    ],
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
import { Button } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';
import bannerHorizontal from './images/banner-horizontal.jpg';
import bannerVertical from './images/banner-vertical.jpg';
import EquipmentCard from './EquipmentCard';
import './Home.css';

const equipment = [
    {
        service: 'Fabrication',
        equipment: [
            'Do-all vertical saw (14" capacity)',
            'Peddinghaus iron worker',
            'Tube bender',
            'Press 1/2" plate by 16"',
            'Klokie propane/oxygen table',
            '20"x20" stress relief oven',
            "14'x26' paint booth"
        ]
    },
    {
        service: 'Welding',
        equipment: [
            'AWS D1.1/D1.2 by certified welders',
            'FCAW',
            'GMAW',
            'SMAW',
            'Fillet welds to complete joint, penetration welds on plate, pipe, and structural members',
            'Mild steels, high strength low alloy steels, stainless steels, and aluminum',
            'Independent quality control CWI level III inspector'
        ]
    },
    {
        service: 'Machining',
        equipment: [
            'Milltronics RH20 vertical CNC mill',
            'Haas tool room lathe',
            '425 Journeyman mill',
            'Suzuki vertical/horizontal mill with digital two-axis reader',
            'Surbra horizontal boring mill with digital three-axis reader',
            'Super Mill horizontal boring mill with digital four-axis reader'
        ]
    }
]

const Home = () => {
    const [banner, setBanner] = useState(window.innerWidth >= 768 ? bannerHorizontal : bannerVertical);
    const history = useHistory();

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && banner === bannerVertical) setBanner(bannerHorizontal);
        else if (window.innerWidth < 768 && banner === bannerHorizontal) setBanner(bannerVertical);
    });

    return (
        <div className="Home">
            <div className="Home-banner" style={{ backgroundImage: `url(${banner})` }}>
                <h1 className="Home-title">Welcome to <span className="Home-title-comp">Bybee Mfg. <small>LLC</small></span></h1>
                <div className="Home-info">
                    <ul className="Home-info-list">
                        <li>35 years' manufacturing experience</li>
                        <li>Low overhead, affordable pricing</li>
                        <li>10,000 sq ft of fabrication space</li>
                    </ul>
                </div>
            </div>
            <div className="Home-equipment">
                {equipment.map(item => <EquipmentCard item={item} key={item.service} />)}
            </div>
            <Button color="secondary" onClick={() => history.push('/services')}>Learn more about our services -{'>'}</Button>
        </div>
    )
}

export default Home;
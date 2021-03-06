import { Table } from 'reactstrap';
import Banner from '../services/Banner';
import wolverinePhoto from './images/wolverine.jpg';
import deerPhoto from './images/deer.jpg';
import './Taxidermy.css';

const overview = {
    title: '',
    text: ['We work on full life-sized mounts, shoulder mounts, European mounts, antler restoration, taxidermy rugs, and most other taxidermy services. We pride ourselves on our high-quality work and will take the utmost care to ensure your trophy is displayed in all its full magnificence.'],
    list: [
        'Antler restoration, replacement, and fabrication run $100 per tine.',
        '$25 head skinning fee for cape or Euro where applicable.',
        'See the below pricing table for all other prices.',
        'Contact us for a quote using the button below for African, exotic, or unlisted species.',
        'Estimated 4-6 months turnaround time, not guaranteed.',
        'Must present portion of hunting tag at time of dropoff.'
    ],
    photo: deerPhoto
};

const pricing = [
    {
        species: 'Antelope',
        shoulder: 700,
        lifeSize: 4000,
        european: 175,
        metalCoat: 250,
        furRug: null
    },
    {
        species: 'Badger',
        shoulder: null,
        lifeSize: 1000,
        european: 150,
        metalCoat: 225,
        furRug: 495
    },
    {
        species: 'Bear, Black',
        shoulder: 800,
        lifeSize: 4200,
        european: 200,
        metalCoat: 275,
        furRug: '225/ft'
    },
    {
        species: 'Bear, Grizzly',
        shoulder: 1300,
        lifeSize: 5250,
        european: 200,
        metalCoat: 275,
        furRug: '250/ft'
    },
    {
        species: 'Beaver',
        shoulder: null,
        lifeSize: 1200,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Bison',
        shoulder: 1800,
        lifeSize: 12000,
        european: 325,
        metalCoat: 400,
        furRug: null
    },
    {
        species: 'Boar',
        shoulder: 800,
        lifeSize: 3500,
        european: 200,
        metalCoat: 275,
        furRug: null
    },
    {
        species: 'Bobcat',
        shoulder: null,
        lifeSize: 1300,
        european: 200,
        metalCoat: 275,
        furRug: 895
    },
    {
        species: 'Caribou',
        shoulder: 1200,
        lifeSize: 5000,
        european: 175,
        metalCoat: 250,
        furRug: null
    },
    {
        species: 'Coyote',
        shoulder: 500,
        lifeSize: 2000,
        european: 100,
        metalCoat: 175,
        furRug: 895
    },
    {
        species: 'Deer',
        shoulder: 750,
        lifeSize: 4200,
        european: 175,
        metalCoat: 250,
        furRug: null
    },
    {
        species: 'Elk',
        shoulder: 1200,
        lifeSize: 6500,
        european: 225,
        metalCoat: 300,
        furRug: null
    },
    {
        species: 'Fisher',
        shoulder: null,
        lifeSize: 1300,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Fox',
        shoulder: null,
        lifeSize: 1200,
        european: 150,
        metalCoat: 225,
        furRug: 895
    },
    {
        species: 'Javelina',
        shoulder: 750,
        lifeSize: 2400,
        european: 200,
        metalCoat: 275,
        furRug: null
    },
    {
        species: 'Lynx',
        shoulder: null,
        lifeSize: 1800,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Marmot',
        shoulder: null,
        lifeSize: 1300,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Marten',
        shoulder: null,
        lifeSize: 1200,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Moose, Canadian or Alaskan',
        shoulder: 1800,
        lifeSize: 12000,
        european: 300,
        metalCoat: 375,
        furRug: null
    },
    {
        species: 'Moose, Shiras',
        shoulder: 1600,
        lifeSize: 10000,
        european: 300,
        metalCoat: 375,
        furRug: null
    },
    {
        species: 'Mountain Goat',
        shoulder: 850,
        lifeSize: 4500,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Mountain Lion',
        shoulder: 900,
        lifeSize: 4750,
        european: 150,
        metalCoat: 225,
        furRug: 1500
    },
    {
        species: 'Musk Ox',
        shoulder: 1600,
        lifeSize: 6500,
        european: 300,
        metalCoat: 375,
        furRug: null
    },
    {
        species: 'Raccoon',
        shoulder: null,
        lifeSize: 1000,
        european: 175,
        metalCoat: 250,
        furRug: 375
    },
    {
        species: 'Sheep',
        shoulder: 950,
        lifeSize: 4500,
        european: 225,
        metalCoat: 300,
        furRug: null
    },
    {
        species: 'Weasel',
        shoulder: null,
        lifeSize: 600,
        european: 150,
        metalCoat: 225,
        furRug: null
    },
    {
        species: 'Wolf',
        shoulder: null,
        lifeSize: 3500,
        european: 175,
        metalCoat: 250,
        furRug: 1000
    },
    {
        species: 'Wolverine',
        shoulder: null,
        lifeSize: 2000,
        european: 175,
        metalCoat: 250,
        furRug: 900
    }
];

const Taxidermy = () => {
    return (
        <div className="Taxidermy">
            <h1 className="Taxidermy-title">Taxidermy Shop</h1>
            <Banner title={overview.title} text={overview.text} list={overview.list} photo={overview.photo} />
            <div className="Taxidermy-pricing">
                <h3>Pricing</h3>
                <Table className="Taxidermy-table" striped responsive>
                    <thead>
                        <tr className='Taxidermy-odd'>
                            <th className="Taxidermy-species"></th>
                            <th className="Taxidermy-price">Shoulder</th>
                            <th className="Taxidermy-price">Life Size</th>
                            <th className="Taxidermy-price">European</th>
                            <th className="Taxidermy-price">Metal Coat</th>
                            <th className="Taxidermy-price">Fur Rug</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricing.map((item, index) => <tr key={item.species} className={`Taxidermy-${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <td className="Taxidermy-species" >{item.species}</td>
                            <td className="Taxidermy-price">{item.shoulder && `$${item.shoulder}`}</td>
                            <td className="Taxidermy-price">${item.lifeSize}</td>
                            <td className="Taxidermy-price">${item.european}</td>
                            <td className="Taxidermy-price">${item.metalCoat}</td>
                            <td className="Taxidermy-price">{item.furRug && `$${item.furRug}`}</td>
                        </tr>)}
                    </tbody>
                </Table>
                <img className="Taxidermy-photo" src={wolverinePhoto} />
            </div>
        </div>
    )
}

export default Taxidermy;

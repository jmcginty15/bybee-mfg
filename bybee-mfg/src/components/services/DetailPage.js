import Banner from './Banner';
import './DetailPage.css';

const DetailPage = ({ title, text, photo }) => {
    return (
        <div className="DetailPage">
            <Banner title={title} text={text} photo={photo} />
        </div>
    )
}

export default DetailPage;
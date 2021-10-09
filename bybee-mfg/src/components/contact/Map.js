import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

const defaultView = {
    center: {
        lat: 41.4883,
        lng: -112.01243
    },
    zoom: 11
};


const Map = (props) =>
    <GoogleMap defaultCenter={{ lat: 41.4883, lng: -112.01243 }} defaultZoom={13}>
        <Marker
            position={{ lat: 41.4883, lng: -112.01243 }}
            title="Bybee"
        />
    </GoogleMap>

export default withScriptjs(withGoogleMap(Map));
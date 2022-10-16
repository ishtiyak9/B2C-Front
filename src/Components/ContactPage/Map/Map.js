import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {

    const lat=59.955413
    const  lng=30.337844
    return (
        <div style={{ height: '186px', width: '351px', marginTop: '30px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDixoOe6wrfAs7rvOl0NroxnRfauUFMakU' }}
                defaultCenter={{lat: parseInt(lat), lng: parseInt(lng)}}
                defaultZoom={12}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
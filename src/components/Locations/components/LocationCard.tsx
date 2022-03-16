import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

interface LocationCardProps {
  image: string,
  title: string,
  desc: string,
  color: string,
};

const Map = () => <GoogleMap defaultZoom={10} defaultCenter={{lat: 12, lng: 12}} />;

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LocationCard = ({ image, title, desc, color }: LocationCardProps) => (
  <div className="flex items-center my-10">
    <div className="w-[600px]">
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    <div className="ml-10">
      <img src={image} alt={title} className="h-28 w-28 my-10" />
      <div className="flex flex-col my-10">
        <p className="my-2 text-lg font-medium">{title}</p>
        <p className="my-2">{desc}</p>
      </div>
    </div>
  </div>
);

export default LocationCard;

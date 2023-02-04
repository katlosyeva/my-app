import GoogleMapReact from "google-map-react";
import classes from "./Map.module.css";

const Pin = () => {
  return <img src="../assets/location-pin.png" />;
};
export default function Map(props) {
  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 11,
  };

  return (
    <>
      <div
        className={classes.map}
        // style={{ height: "100%", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_NEXT_PUBLIC_MAP_API_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Pin lat={props.lat} lng={props.lng} />
        </GoogleMapReact>
      </div>
    </>
  );
}

import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './mapcontainer.cssmodule.sass';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class MapContainer extends React.Component {

  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoieGluZ21lYW5zb2siLCJhIjoiY2o0bnQ4dmxvMWhhNjMzcGx5NGM0cncyZiJ9.5cy4rg9_GhW7UbCzXZWcLA"
    });
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
      </Map>
    );
  }
}

MapContainer.displayName = 'MapContainerMapContainer';
MapContainer.propTypes = {};
MapContainer.defaultProps = {};

export default cssmodules(MapContainer, styles);

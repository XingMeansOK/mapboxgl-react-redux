import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './mapcontainer.cssmodule.sass';
import ReactMapboxGl, {
  ScaleControl,
  ZoomControl,
  RotationControl,
  Layer,
  Feature
} from "react-mapbox-gl";
const { token } = require('../../sources/config.json');
const route = require('../../sources/route.json');
import { AllShapesPolygonCoords, AllShapesMultiPolygonCoords } from '../../sources/data';
const mappedRoute = route.points.map((point: any) => [ point.lat, point.lng ]);

class MapContainer extends React.Component {

  render() {
    const Map = ReactMapboxGl({
      accessToken: token
    });
    const lineLayout = {
      'line-cap': 'round',
      'line-join': 'round'
    };

    const linePaint = {
      'line-color': '#4790E5',
      'line-width': 12
    };
    const multiPolygonPaint = {
      'fill-color': '#3bb2d0',
      'fill-opacity': .5
    };
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        {/* Controls */}
        <ZoomControl/>
        <RotationControl
          style={{ top: 80 }}
        />

        {/* Line example */}
        <Layer
          type="line"
          layout={lineLayout}
          paint={linePaint}
        >
          <Feature coordinates={mappedRoute}/>
        </Layer>


        {/* Multi Polygon example */}
        <Layer
          type="fill"
          paint={multiPolygonPaint}
        >
          <Feature coordinates={AllShapesMultiPolygonCoords}/>
        </Layer>

      </Map>
    );
  }
}

MapContainer.displayName = 'MapContainerMapContainer';
MapContainer.propTypes = {};
MapContainer.defaultProps = {};

export default cssmodules(MapContainer, styles);

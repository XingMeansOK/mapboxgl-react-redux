import React from 'react';
import MapContainer from './mapContainer/MapContainer';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="top">
        <MapContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

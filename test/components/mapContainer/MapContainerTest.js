import React from 'react';
import { shallow } from 'enzyme';
import MapContainer from 'components\mapContainer\MapContainer.js';

describe('<MapContainer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MapContainer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "mapcontainer-component"', function () {
      expect(component.hasClass('mapcontainer-component')).to.equal(true);
    });
  });
});

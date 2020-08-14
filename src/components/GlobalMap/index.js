import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './GlobalMap.scss';
const GlobalMap = (props) => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  return (
    <>
      <ComposableMap className='map'>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            return geographies.map(
              (geo) =>
                geo.properties.ISO_A2 === 'BR' && (
                  <Geography key={geo.rsmKey} geography={geo} />
                )
            );
          }}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default GlobalMap;

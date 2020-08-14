import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './GlobalMap.scss';
const GlobalMap = ({ alpha2Code }) => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const globalMap = (item) => <Geography key={item.rsmKey} geography={item} />;

  const filterMap = (item) => {
    if (item.properties.ISO_A2 === alpha2Code) {
      return (
        <Geography key={item.rsmKey} geography={item} className='globalMap' />
      );
    }
  };
  return (
    <>
      <ComposableMap className='map'>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            if (alpha2Code) {
              return geographies.map(filterMap);
            } else {
              return geographies.map(globalMap);
            }
          }}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default GlobalMap;

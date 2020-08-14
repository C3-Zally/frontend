import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './GlobalMap.scss';
const GlobalMap = ({ alpha2Code }) => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';
  const filterMap = (item) => {
    if (alpha2Code) {
      if (item.properties.ISO_A2 === alpha2Code) {
        return (
          <Geography key={item.rsmKey} geography={item} className='globalMap' />
        );
      }
    }
    return <Geography key={item.rsmKey} geography={item} />;
  };
  return (
    <>
      <ComposableMap className='map'>
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies.map(filterMap)}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default GlobalMap;

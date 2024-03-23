
import { useState, useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function MyMap({ lat, lon, zoom }) {
  const navermaps = useNavermaps()
  console.log('현재 map 위치:', lat, lon)
  let mapCenter= new navermaps.LatLng(lat, lon);
  return (
    <MapDiv className="naver-map" style={{ width: '80%',height: '80vh'}}>
      <NaverMap
        center={mapCenter}
        zoom={zoom}
      >
        <Marker
          position={mapCenter}
        />
      </NaverMap>
      {console.log('map lat', lat)}
    </MapDiv>
  )
}

export default MyMap;

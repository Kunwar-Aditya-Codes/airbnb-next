import { getCenter } from 'geolib';
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComp = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // console.log(coordinates);

  const center = getCenter(coordinates);

  console.log('this is the center >>>>>>>>', center);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewport}
      mapStyle='mapbox://styles/kunwar-aditya/cl28ni61s007b15pfm14t2d09'
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long} className=''>
          {/* The markers for the airbnb properties */}
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <a
              onClick={() => {
                setSelectedLocation(result);
              }}
            >
              <p
                role='img'
                className='cursor-pointer text-2xl animate-bounce '
                aria-label='push-pin'
              >
                📌
              </p>
            </a>
          </Marker>

          {/* The popup when we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className='z-[100000]'
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapComp;

import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiY29kaW5najg3IiwiYSI6ImNreXdsdGIyejA5bzEydXAzbjJybW5tazMifQ.7ze4pRmKg8gq_lfcDm5-Mg";

const Map = () => {
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <Wrapper id="mapContainer"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1
`;
export default Map;

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Skeleton } from '@mui/material';
import { layer, custom, Map, Layers } from 'react-openlayers';
import { transform } from 'ol/proj';
import * as ol from 'openlayers';

import { IInitialState } from 'types/main';

import useStyles from './MapDetails.styles';

const MapDetails = () => {
  const { id } = useParams();
  const { farms, loading } = useSelector((state: IInitialState) => state);
  const selectFarm = farms.find((farm) => farm.id === id) || null;
  const coordinatesFarm = selectFarm?.coordinates || [0, 0];

  const verifyCoordinates = (coordinates: number[]) => {
    const [longitude, latitude] = coordinates;
    return transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
  };
  const iconFeature = new ol.Feature(
    new ol.geom.Point(verifyCoordinates(coordinatesFarm))
  );
  const source = new ol.source.Vector({ features: [iconFeature] });
  const marker = new custom.style.MarkerStyle(
    'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
  );

  const classes = useStyles();

  return (
    <Box className={classes.mapDetails}>
      {loading ? (
        <Skeleton variant="rounded" width={'100%'} height={300} />
      ) : (
        <Map
          view={{
            center: verifyCoordinates(coordinatesFarm),
            zoom: 10,
          }}
        >
          <Layers>
            <layer.Tile />
            <layer.Vector style={marker.style} source={source} />
          </Layers>
        </Map>
      )}
    </Box>
  );
};
export default MapDetails;

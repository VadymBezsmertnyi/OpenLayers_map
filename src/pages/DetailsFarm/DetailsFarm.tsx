import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import { IInitialState, TFarm } from 'types/main';

import useStyles from './DetailsFarm.styles';

const DetailsFarm = () => {
  const { id } = useParams();
  const { farms, serverConnect } = useSelector((state: IInitialState) => state);
  const navigate = useNavigate();
  const selectFarm = farms.find((farm) => farm.id === id) || null;
  const showCoordinates = `${selectFarm?.coordinates[0]}, ${selectFarm?.coordinates[1]}`;

  const classes = useStyles();

  useEffect(() => {
    if (!id || (!selectFarm && !serverConnect)) navigate('/');
  }, [id, selectFarm, serverConnect]);

  return (
    <Box className={classes.containerDetails}>
      <Box className={classes.headerDetails}>
        <Button className={classes.buttonBack} onClick={() => navigate('/')}>
          Back to home
        </Button>
        <Typography variant={'h5'} className={classes.nameTitle}>
          {selectFarm?.name}
        </Typography>
        <Box className={classes.containerCoordinates}>
          <Typography className={classes.titleCoordinates}>
            Coordinates sensor:
          </Typography>
          <Typography className={classes.textCoordinates}>
            {showCoordinates}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsFarm;

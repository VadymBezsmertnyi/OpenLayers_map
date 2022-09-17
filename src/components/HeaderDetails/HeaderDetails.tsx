import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Skeleton, Typography } from '@mui/material';

import { IInitialState } from 'types/main';

import useStyles from './HeaderDetails.styles';

const HeaderDetails = () => {
  const { id } = useParams();
  const { farms, serverConnect, loading } = useSelector(
    (state: IInitialState) => state
  );
  const navigate = useNavigate();
  const selectFarm = farms.find((farm) => farm.id === id) || null;
  const showCoordinates = `${selectFarm?.coordinates[0]}, ${selectFarm?.coordinates[1]}`;

  const classes = useStyles();

  useEffect(() => {
    if (!id || (!selectFarm && !serverConnect)) navigate('/');
  }, [id, selectFarm, serverConnect]);

  return (
    <Box className={classes.headerDetails}>
      <Button className={classes.buttonBack} onClick={() => navigate('/')}>
        Back to home
      </Button>
      {loading ? (
        <Skeleton variant="text" sx={{ fontSize: '2.125rem' }} width={150} />
      ) : (
        <Typography variant={'h4'} className={classes.nameTitle}>
          {selectFarm?.name}
        </Typography>
      )}
      <Box className={classes.containerCoordinates}>
        <Typography className={classes.titleCoordinates}>
          Coordinates sensor:
        </Typography>
        {loading ? (
          <Skeleton
            variant="text"
            className={classes.textCoordinates}
            width={150}
          />
        ) : (
          <Typography className={classes.textCoordinates}>
            {showCoordinates}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HeaderDetails;

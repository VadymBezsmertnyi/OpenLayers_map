import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFarm } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { IInitialState } from 'types/main';

import useStyles from './Layout.styles';

const MainPage = () => {
  const { farms, serverConnect } = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  useEffect(() => {
    if (!farms.length && serverConnect) dispatch(fetchFarm());
  }, [farms, serverConnect]);

  return (
    <Box className={classes.mainContainer}>
      <Outlet />
    </Box>
  );
};

export default MainPage;

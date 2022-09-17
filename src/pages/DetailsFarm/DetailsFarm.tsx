import { Box } from '@mui/material';

import { HeaderDetails, MapDetails } from 'components';

import useStyles from './DetailsFarm.styles';

const DetailsFarm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerDetails}>
      <HeaderDetails />
      <MapDetails />
    </Box>
  );
};

export default DetailsFarm;

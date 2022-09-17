import { Box } from '@mui/material';

import useStyles from './DetailsFarm.styles';
import { HeaderDetails } from 'components';

const DetailsFarm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerDetails}>
      <HeaderDetails />
    </Box>
  );
};

export default DetailsFarm;

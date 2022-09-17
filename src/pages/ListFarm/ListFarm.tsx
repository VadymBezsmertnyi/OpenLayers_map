import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { CardFarm } from 'components';
import { IInitialState, TFarm } from 'types/main';
import useStyles from './ListFarm.styles';

const ListFarm = () => {
  const { farms } = useSelector((state: IInitialState) => state);
  const classes = useStyles();

  return (
    <Box className={classes.containerCards}>
      {farms.length ? (
        farms.map(({ id, name, description }: TFarm) => (
          <CardFarm
            key={`farmCard_${id}`}
            name={name}
            description={description}
            selectCard={() => console.log(id)}
          />
        ))
      ) : (
        <Typography>Sorry, list empty</Typography>
      )}
    </Box>
  );
};

export default ListFarm;

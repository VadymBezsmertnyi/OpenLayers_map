import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Skeleton, Typography } from '@mui/material';

import { CardFarm } from 'components';
import { IInitialState, TFarm } from 'types/main';

import useStyles from './ListFarm.styles';

const ListFarm = () => {
  const { farms, loading } = useSelector((state: IInitialState) => state);
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.containerList}>
      <Typography className={classes.titleList} variant="h2">
        Farm sensors
      </Typography>
      <Box className={classes.containerCards}>
        {loading ? (
          Array.from(Array(9).keys()).map((_empty, i) => (
            <Skeleton
              key={`skeleton_${i}`}
              variant="rounded"
              width={300}
              height={170}
            />
          ))
        ) : !loading && farms.length ? (
          farms.map(({ id, name, description }: TFarm) => (
            <CardFarm
              key={`farmCard_${id}`}
              name={name}
              description={description}
              selectCard={() => navigate(`/details/${id}`)}
            />
          ))
        ) : (
          <Typography>Sorry, list empty</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ListFarm;

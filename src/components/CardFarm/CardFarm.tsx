import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import useStyles from './CardFarm.styles';

interface ICardFarmProps {
  name: string;
  description: string;
  selectCard: () => void;
}

const CardFarm = ({ name, description, selectCard }: ICardFarmProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.containerCard}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={selectCard}>
          details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardFarm;

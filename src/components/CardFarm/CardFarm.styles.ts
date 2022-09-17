import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
  },
  titleCard: {
    fontFamily: 'ui-rounded',
    fontSize: 22,
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  containerCards: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '5px',
    padding: '10px',
  },
}));

export default useStyles;

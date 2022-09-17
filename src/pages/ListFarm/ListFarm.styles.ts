import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  containerList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  titleList: {
    fontFamily: 'ui-rounded',

    '@media (max-width: 410px)': {
      fontSize: '1.75rem',
    },
  },
  containerCards: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '5px',
  },
}));

export default useStyles;

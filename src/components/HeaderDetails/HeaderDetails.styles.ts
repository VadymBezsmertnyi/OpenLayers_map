import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  headerDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',

    '@media (max-width: 350px)': {
      justifyContent: 'center',
    },
  },
  buttonBack: {},
  nameTitle: {
    fontFamily: 'ui-rounded',
  },
  containerCoordinates: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '@media (max-width: 410px)': {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      maxWidth: '400px',
    },
  },
  titleCoordinates: {
    fontSize: '14px',
  },
  textCoordinates: {
    fontSize: '12px',
  },
}));

export default useStyles;

import { InvertColors } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

// instantly return styles object
export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },

  image: {
    width: '70%',
  },

  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },

  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },

}));

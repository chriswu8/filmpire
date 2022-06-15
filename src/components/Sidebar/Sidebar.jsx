import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const Sidebar = (setMobileOpen) => {
  const theme = useTheme();
  const classes = useStyles();
  const pinkLogo = 'https://fontmeme.com/permalink/220615/2c32f41c995dddf8a29561d4323d4127.png';
  const blueLogo = 'https://fontmeme.com/permalink/220615/b067cde88a418b578922d21e95d3a7c9.png';

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : pinkLogo}
          alt="logo"
        />
      </Link>
    </>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { AppBar, Avatar, Button, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // for light or dark theme
import useStyles from './styles';
import { Sidebar } from '..';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <h1>Nav@@</h1>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => { }}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton
            color="inherit"
            sx={{ ml: 1 }} // ml means margin left
            onClick={() => { }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <button type="button" color="inherit" onClick={() => { }}>
                Login &nbsp; <AccountCircle />
              </button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => { }}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://www.clipartmax.com/png/middle/110-1104174_computer-icons-user-clip-art-lily-pad-coloring-page.png"
                />
              </Button>
            )}
          </div>

          {isMobile && 'Search...'}

        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>

          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;

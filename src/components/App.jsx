import React from 'react';
import { CssBaseline } from '@mui/material';

// used to created different pages
import { Route, Switch } from 'react-router-dom';

// / -> root -> all movies
// /abc123 -> movie information -> more

const App = () => (

  <div>
    <CssBaseline />
    <main>
      <Switch>
        <Route exact path="/">
          <h1>Movie</h1>
        </Route>
        <Route exact path="/movie/:id">
          <h1>Movie Information</h1>
        </Route>
        <Route exact path="/actors/:id">
          <h1>Actors</h1>
        </Route>
        <Route exact path="/profile/:id">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </main>
  </div>

);

export default App;

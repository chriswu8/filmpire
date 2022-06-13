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
          <h1>home</h1>
        </Route>
        <Route exact path="/movies">
          <h1>movies</h1>
        </Route>
      </Switch>
    </main>
  </div>

);

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { createBrowserHistory } from 'history';

import Home from './Home';
import AppBar from './AppBar';
import { useThemeContextProvider } from './Providers/Theme';
import Container from './Container';

export default function Root() {
  const [open, setOpen] = React.useState(false);
  const { getTheme } = useThemeContextProvider();
  const date = new Date();
  return (
      <ThemeProvider theme={getTheme()}>
          <Router>
            <Route render={p => (
              <AppBar
                clipped
                rightToolbar={
                  <Tooltip title="Open in GitHub">
                    <GitHubIcon onClick={() => { window.location.href = "https://github.com/jagribble" }} />
                  </Tooltip>}
                menuItems={[{ title: 'Home', path: '/' }]}
                open={open}
                handleDrawerToggle={() => setOpen(!open)}
                {...p}
              />
            )} />
            <Switch>
              <Route path="/" exact render={p => (<Container open={open}><Home {...p} /></Container>)} />
            </Switch>
          </Router>
      </ThemeProvider>
  );
}
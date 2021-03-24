import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Container from './components/Container';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const MovieView = lazy(() =>
  import('./views/MovieView' /* webpackChunkName: "MovieView" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={routes.home} component={HomeView} />
              <Route path={routes.movie} component={MovieDetailsPage} />
              <Route path={routes.movies} component={MovieView} />
              <Route component={HomeView} />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

export default App;

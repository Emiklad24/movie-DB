import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import FallbackSuspense from './Components/FallbackSuspense';
import Error404 from './Pages/Erro404';
import ErrorBoundary from './Pages/ErrorBoundary';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import './Styles/App.css';
import PrivateRoute from './Components/PrivateRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const middleware = [thunk];

const persistConfig = {
  key: 'movie-app',
  storage,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

let persistor = persistStore(store)

const Movies = lazy(() => import("./Pages/Movies.js"));
const Signup = lazy(() => import("./Pages/Signup.js"));
const Login = lazy(() => import("./Pages/Login"));
const Watchlist = lazy(() => import("./Pages/Watchlist"));

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
              <ToastContainer
                limit={1}
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
              />
              <Suspense fallback={<FallbackSuspense />}>
                <Switch>
                  <Route exact path="/" component={Movies} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/watchlist" component={Watchlist} />
                  <Route component={Error404} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Spots from "./components/Spots/Spots";
import SpotPage from "./components/SpotPage/SpotPage";
import HostForm from "./components/HostForm/HostForm";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = async () => {
      await dispatch(sessionActions.restoreUser());
      setIsLoaded(true);
    }
    loaded();
  }, [dispatch]);

  return (
    isLoaded && (
      <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/spots">
            <Spots />
          </Route>
          <Route path='/spots/host'>
            <HostForm />
          </Route>
          <Route path='/spots/:spotId'>
            <SpotPage />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      )}
      <Footer isLoaded={isLoaded}/>
    </>
    )
  );
}

export default App;

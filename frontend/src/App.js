import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home.js";
import Spots from "./components/Spots/Spots.js"

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
          <Route path="/spots">
            <Spots />
          </Route>
          <Route path='/spots/:spotId'>
            
          </Route>
        </Switch>
      )}
    </>
    )
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from './ui/Login/Login';
import Devices from './ui/Devices/Devices';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuthLoading(false);
    } else {
      setAuthLoading(false);
    }

  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PublicRoute exact path="/" component={Login} />
              {/* <PublicRoute path="/login" component={Login} /> */}
              <PrivateRoute path="/devices" component={Devices} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
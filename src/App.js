import React, {useEffect, useState} from 'react';
import Context from "react-redux/lib/components/Context";
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./routes/routes";
function App() {

    const [currentCategory, setCurrentCategory] = useState('Дом')
    const {token, login, logout,userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

  return (
      <Router>
          <div className="App">
              <AuthContext.Provider value={{token,login,logout,userId, isAuthenticated}}>
                  <div className='app-main'>
                  <Context.Provider value={[currentCategory, setCurrentCategory]}>
                      {routes}

                  </Context.Provider>
                  </div>
              </AuthContext.Provider>
          </div>
      </Router>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useStateValue } from './StateProvider';
import SideBar from './components/SideBar/SideBar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <BrowserRouter>
            <SideBar />
            <Switch>
              <Route path='/rooms/:roomId' exact>
                <Chat />
              </Route>
              <Route path='/' exact>
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;

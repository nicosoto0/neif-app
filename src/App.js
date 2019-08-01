import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
//import LoginPage from "./components/pages/LoginPage"
import FbPage from "./components/pages/FbPage";
import FbProfilePage from "./components/pages/FbProfilePage"
import FbAccountsPage from "./components/pages/FbAccountsPage"
import FbAccountIndexPage from "./components/pages/FbAccountIndexPage"
import InDevelopmentPage from "./components/pages/InDevelopmentPage"
import AppHeader from "./components/utils/AppHeader";


const App = () => (
  <div>
    <AppHeader />
    <div className="ui container">
      <Route path="/" exact component={HomePage} />
      <Route path="/fb" exact component={FbPage} />
      <Route path="/fb/profile" exact component={FbProfilePage} />
      <Route path="/fb/accounts" exact component={FbAccountsPage} />
      <Route path="/fb/accounts/:accountId" component={FbAccountIndexPage} />
      <Route path="/InDevelopment" component={InDevelopmentPage} />
    </div>
  </div>
);

//      <Route path="/login" exact component={LoginPage} /> <br />

export default App;

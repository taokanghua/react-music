import React, {memo} from 'react'
import { renderRoutes } from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './router';

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

function App() {
  return (
    <Router>
      <AppHeader/>
      {renderRoutes(routes)}
      <AppFooter/>
    </Router>
  );
}

export default memo(App);

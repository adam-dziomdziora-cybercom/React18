import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { MyNavbar } from './navbar';
import Welcome from './welcome';

function NoMatch() {
  const location = useLocation();
  return (
    <div className="text-shadow">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export const MyRouter = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
  return (
    <Router>
      <MyNavbar />
      {routes}
    </Router>
  );
};

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyLoader } from './my-loader';

const Home = lazy(() => import('../home/home'));
const Welcome = lazy(() => import('../welcome/welcome'));
const MyNavbar = lazy(() => import('./navbar'));
const NoMatch = lazy(() => import('./no-match'));

export const MyRouter = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
  return (
    <Router>
      <Suspense fallback={<MyLoader />}>
        <MyNavbar />
        {routes}
      </Suspense>
    </Router>
  );
};

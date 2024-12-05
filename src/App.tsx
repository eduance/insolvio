import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { withMinLoadingTime } from './utils/loading';

// Lazy load components with minimum loading time
const Home = React.lazy(() => withMinLoadingTime(import('./pages/Home')));
const Promise = React.lazy(() => withMinLoadingTime(import('./pages/Promise')));
const NotFound = React.lazy(() => withMinLoadingTime(import('./pages/NotFound')));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/promise" element={<Promise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  startTracking,
  trackPageView,
} from './analytics.js';

const Analytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    startTracking();
  }, []);

  React.useEffect(() => {
    trackPageView(`${location.pathname}${location.hash}`);
  }, [location.pathname, location.hash]);

  return null;
};

export default Analytics;

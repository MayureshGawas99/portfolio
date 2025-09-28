// src/AnalyticsTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-B96TWH7JVR"; // your GA4 measurement ID
ReactGA.initialize(TRACKING_ID);

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Runs every time route changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

export default AnalyticsTracker;

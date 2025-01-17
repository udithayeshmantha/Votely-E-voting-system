import React from 'react';
import Index from "./Main";
import VotersGuideline from "../components/dashboard components/Voter Guideline";
import Vote from "../components/dashboard components/Vote";
import Settings from "../components/Settings";

const routeConfig = [
  { path: "/", component: Index },
  { path: "/Index", component: Index },
  { path: "/candidates", component: Vote },
  { path: "/VotersGuideline", component: VotersGuideline },
  { path: "/settings", component: Settings },
];

export default routeConfig;
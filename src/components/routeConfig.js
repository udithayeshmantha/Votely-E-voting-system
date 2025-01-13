import Contactus from "../pages/Contactus";
import Index from "./Main";
import SignUp from "../pages/SignUp";
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

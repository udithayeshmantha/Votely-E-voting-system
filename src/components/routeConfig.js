import Contactus from "../pages/Contactus";
import Index from "./Main";
import SignUp from "../pages/SignUp";
import VotersGuideline from "../components/dashboard components/Voter Guideline";

const routeConfig = [
  { path: "/", component: Index },
  { path: "/Index", component: Index },
  { path: "/candidates", component: Contactus },
  { path: "/VotersGuideline", component: VotersGuideline },
  { path: "/settings", component: Contactus },
];

export default routeConfig;

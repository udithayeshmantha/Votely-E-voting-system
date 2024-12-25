import Contactus from "../pages/Contactus";
import SignUp from "../pages/SignUp";
import VotersGuideline from "../components/dashboard components/Voter Guideline";

const routeConfig = [
  { path: "/", component: Contactus },
  { path: "/elections", component: SignUp },
  { path: "/candidates", component: Contactus },
  { path: "/VotersGuideline", component: VotersGuideline },
  { path: "/settings", component: Contactus },
];

export default routeConfig;

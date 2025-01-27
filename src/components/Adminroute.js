import Index from "./Main";
import ManageUsers from "./admin components/manageUsers";
import AddNewUser from "./admin components/addnewuser";

const Adminroute = [
  { path: "/admin", component: ManageUsers },
  { path: "/admin/users", component: ManageUsers },
  { path: "/admin/add-user", component: AddNewUser },
  { path: "/admin/dashboard", component: AddNewUser },
  { path: "/admin/candidates", component: AddNewUser },
  { path: "/admin/results", component: AddNewUser },
  { path: "/admin/settings", component: AddNewUser },
];

export default Adminroute;

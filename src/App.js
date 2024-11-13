import './styles/App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import OtpPage from './pages/OtpPage';
import RegForm from './components/RegForm';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <SignUp />
      <SignIn />
      <ResetPassword />
      <OtpPage />
      <RegForm />
    </div>
  );
}

export default App;

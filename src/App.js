import './styles/App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import OtpPage from './pages/OtpPage';
import RegForm from './components/RegForm';

function App() {
  return (
    <div className="App">
      <Login />
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

import './styles/App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <SignUp />
      <SignIn />
      <ResetPassword />
    </div>
  );
}

export default App;

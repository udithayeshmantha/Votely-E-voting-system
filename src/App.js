import './styles/App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;

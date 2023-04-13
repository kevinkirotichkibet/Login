// import { Login } from '@mui/icons-material';
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from '/Users/kevin.kibet/Documents/Cheri/LoginPage/login_page/src/pages/signUp/SignUp.jsx';

function App() {
  return (
    <Router>
      <Login  />
      <Route path='/src/pages/signUp/SignUp.jsx' element={ <SignUp />  }  />
      
    </Router>

    

  );
}

export default App;

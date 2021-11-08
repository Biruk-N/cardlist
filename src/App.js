import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='container'>
        <input value='Email Address'/><br/>
        <input value='Password'/><br/>
        <Button variant="contained">Log in</Button>
        <Button variant="contained">Create Account</Button>
    </div>
  );
}

export default App;

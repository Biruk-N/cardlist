import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Image  from './Components/Image';
function App() {
  return (
    <div>
    <div className='container'>
        <input value='Email Address'/><br/>
        <input value='Password'/><br/>
        <Button variant="contained">Log in</Button>
        <Button variant="contained" color="success">Create Account</Button>

      <Button
        onClick={() => {
          alert('clicked');
        }}
    >
      Forgot Account
    </Button>
    
    </div>
    <Image />
    </div>
  );
}

export default App;

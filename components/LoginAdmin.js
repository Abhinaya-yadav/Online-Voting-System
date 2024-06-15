import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Admin.css"
import AddCandidate from './AddCandidate';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login,setLogin] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  if(login){
    if(username==="admin" && password==="admin"){
      return <AddCandidate/>
    }
    else{
      setLogin(false)
      alert("You are not admin")
    }
  }

  return (
    <div>
        <Navbar bg="secondary" expand="lg" variant="dark">
      <Container >
        <h1 className="tt">Online Voting </h1>
          <Nav className="me-auto">
            <Button variant="light"className="btn" ><Link to='/'>Home</Link></Button>
            <Button variant="light"className="btn" ><Link to='/user'>User</Link></Button>
            <Button variant="light" className="btn"><Link to='/register'>Register</Link></Button>
            <Button variant="light" className="btn"><Link to='/admin'>Admin</Link></Button>
          </Nav>
      </Container>
    </Navbar>
    <h2 className='heading'>Admin Login</h2>
    <div className='admin'>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <Button variant='secondary' onClick={()=>setLogin(true)}>Login</Button>
      </form>
      </div>
    </div>
  );
}
export default LoginPage;

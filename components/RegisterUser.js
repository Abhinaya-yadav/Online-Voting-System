import React, {useState } from 'react';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Register.css"
import UserService from '../services/UserService';
function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const[aid,setAid]=useState("");
  const[dob,setDOB]=useState("");
  const[message,setMessage]=useState('');
  const[voter,setVoter]=useState('')
  const[reg,setReg] = useState(false)
  const handleAidChange=(event)=>{
    setAid(event.target.value);
};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmChange = (event) => {
    setConfirmPass(event.target.value);
  };
  
  const handleDOBChange=(event)=>{
    setDOB(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password!==confirmpass)
    alert("password not matched! try again ");
    else if(username==='' || aid==='' || password==='')
    alert("enter complete details");
    else{
      UserService.getUserById(aid).then((res)=>{
        setVoter(res.data)
        console.log(res.data)
        setReg(true)
      })
    } 
  };
  if(reg){
    const user = {aid,username,password,email,dob}
    if(voter.aid == aid){
      setReg(false)
      alert('college Id already exists')
    }
    else{
      setReg(false)
      UserService.createUser(user).then((res)=>{
        console.log(res.data)
        setMessage("sucesfully added")
      })
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
        <h2 className='heading'>Please Register</h2>
        <div className='register'>
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} required={true}/>
      </label><br>
      </br>
      <label>
        UserEmail:
        <input type="email" value={email} onChange={handleEmailChange} />
        <br></br>
      </label>
      <br></br>
      <label >
        DOB:
        <input type='date' value={dob} onChange={handleDOBChange} />
      </label><br></br>
      <label> 
        College ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label><br></br>
        <label>
            Confirm password:
            <input type="password" value={confirmpass} onChange={handleConfirmChange} />
        </label><br></br>
      <Button variant='secondary' onClick={handleSubmit}> Register</Button>
    </form> 
    <h5>{message}</h5>
    </div>
    </div>
  );
};

export default RegistrationPage;

import React,{useState} from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container ,Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Login.css"
import UserService from "../services/UserService";
import Election from "./Election";
function Login(){

    const [uname,setUname]=useState("")
    const [pass,setPass]=useState("")
    const[aid,setAid]=useState("")
    const[user,setUser]=useState('')
    const[login,setLogin]=useState(false)

    const handleAidChange=(event)=>{
        setAid(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUname(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      };
      const handleLogin=(event)=>
      {
        event.preventDefault();
        if(uname==='' || aid==='' || pass==='')
        alert("enter complete deatils")
        else{
        UserService.getUserById(aid).then((res)=>{
          setUser(res.data)
          console.log(res.data)
          setLogin(true)
        })
      }
      }

      if(login){
        if(uname===user.username && pass===user.password){
          return <Election/>
        }
        else{
          setLogin(false)
          alert("Invalid username or password")
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
    <h3 className="heading">Please Login</h3>
    <div className="login">
            <form>
            <label>
          Username:
          <input type="text" value={uname} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
        College ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={pass} onChange={handlePasswordChange} />
        </label>
        <br />
        <Button variant="secondary" onClick={handleLogin} >Login</Button>
            </form>
            Do not have an account ?
            <Button variant="secondary"><Link to='/register' className="regbtn">Register</Link></Button>
            </div>
        </div>
      );
      
}

 export default Login;
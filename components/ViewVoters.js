import React,{Component} from "react";
import UserService from "../services/UserService";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
class ViewVoters extends Component{
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount(){
         UserService.getUsers().then((res)=>{
            this.setState({users:res.data}); 
        });
    }
    render(){
        return(
            <div>
                <Navbar bg="secondary" expand="lg" variant="dark">
      <Container >
        <h1 className="tt">Online Voting </h1>
          <Nav className="me-auto">
            <Button variant="light"className="btn" ><Link to='/addcandidate'>AddCandidates</Link></Button>
            <Button variant="light"className="btn" ><Link to='/candidates'>ViewCandidates</Link></Button>
            <Button variant="light" className="btn"><Link to='/voters'>viewvoters</Link></Button>
            <Button variant="light" className="btn"><Link to='/'>Logout</Link></Button>
          </Nav>
      </Container>
    </Navbar>
            <div className="voter">
                <h2 className="text-header">Voters List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> CollegeId</th>
                                <th> username</th>
                                < th> email</th>
                                <th> dob</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user)=>{
                                        return(
                                            <tr key={user.aid}>
                                            <td>{user.aid}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.dob}</td>
                                        </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}

export default ViewVoters
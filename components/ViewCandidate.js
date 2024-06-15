import React,{Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import CandidateService from "../services/CandidateService";
class ViewCandidates extends Component{
    constructor(props){
        super(props)

        this.state = {
            candidates: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(cid){
        CandidateService.deleteCandidate(cid).then((res)=>{
            this.setState({candidates:this.state.candidates.filter(candidate=>candidate.cid !== cid)});
            console.log("deleted")
        })
    }
    componentDidMount(){
         CandidateService.getCandidates().then((res)=>{
            this.setState({candidates:res.data}); 
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
                <h2 className="text-header">Candidates List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> CandidateName</th>
                                <th> Party</th>
                                < th> Place</th>
                                <th> action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.candidates.map((candidate)=>{
                                        return(
                                            <tr key={candidate.cid}>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.party}</td>
                                            <td>{candidate.place}</td>
                                            <td>
                                                <button onClick={()=> this.handleDelete(candidate.cid)} className="btn btn-danger">Delete</button>
                                            </td>

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

export default ViewCandidates
import React,{Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import CandidateService from "../services/CandidateService";
import VotingService from "../services/VotingService";

class AddCandidate extends Component{
    constructor(props){
        super(props)
        this.state={
            cid:'',
            name:'',
            party:'',
            place:'',
            message:''
        }
    }

    handleCidChange = event =>{
        this.setState({cid:event.target.value})
    }

    handleNameChange = event =>{
        this.setState({name:event.target.value})
    }
    handlePartyChange = event =>{
        this.setState({party:event.target.value})
    }
    handlePlaceChange = event =>{
        this.setState({place:event.target.value})
    }
     handleAdd = event =>{
        event.preventDefault();
        const candidate = {
            cid:this.state.cid,
            name:this.state.name,
            party:this.state.party,
            place:this.state.place
        }
        if(this.state.cid==='' || this.state.name==='' || this.state.party==='' || this.state.place===''){
          alert('Enter complete details')
        }
        else{
        CandidateService.createCandidate(candidate).then(res=>{
            this.setState({message:this.state.name+" added"})
        })
        VotingService.createVoting(candidate).then(res=>{
          console.log("voting added")
        })
      }
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
        <h2 className='heading'>Add Candidate</h2>
            <div className='candidate'>
    <form>
      <label>
        CandidateId:
        <input type="number" value={this.state.cid} onChange={this.handleCidChange} />
      </label><br>
      </br>
      <label>
        Name:
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        <br></br>
      </label>
      <br></br>
      <label> 
        Party:
          <input type="text" value={this.state.party} onChange={this.handlePartyChange} />
        </label><br></br>
      <label>
        Place:
        <input type="text" value={this.state.place} onChange={this.handlePlaceChange} />
      </label><br></br>
      <Button variant='secondary' onClick={this.handleAdd}> Add</Button>
    </form> 
    {this.state.message}
    </div>
    </div>
        )
    }
}
export default AddCandidate
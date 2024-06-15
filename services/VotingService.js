import axios from "axios"
const url = 'http://localhost:3030/voting'

class VotingService{

    createVoting(candidate){
        return axios.post(url,candidate);
    }
}

export default new VotingService()
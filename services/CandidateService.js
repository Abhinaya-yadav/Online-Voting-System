import axios from "axios";

const url = 'http://localhost:3030/candidates'
class  CandidateService{

    createCandidate(candidate){
        return axios.post(url,candidate);
    }

    getCandidates(){
        return axios.get(url);
    }

    deleteCandidate(cid){
        return axios.delete(url+'/'+cid);
    }
}

export default new CandidateService()
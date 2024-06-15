import axios from "axios"

const url = 'http://localhost:3030/users'
class  UserService{

    getUsers(){
        return axios.get(url);
    }
    createUser(user){
        return axios.post(url,user);
    }

    getUserById(aid){
        return axios.get(url+'/'+aid);
    }
}

export default new UserService()
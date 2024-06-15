import './App.css';
import Login from './components/LoginUser';
import RegistrationPage from './components/RegisterUser';
import AdminPage from './components/LoginAdmin';
import HomePage from './components/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ViewVoters from "./components/ViewVoters"
import AddCandidate from './components/AddCandidate';
import ViewCandidates from './components/ViewCandidate';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/user" element={<Login/>}></Route>
      <Route path='/admin' element={<AdminPage/>}></Route>
      <Route path='/register' element={<RegistrationPage/>}></Route>
      <Route path='/voters' element={<ViewVoters/>}></Route>
      <Route path='/addcandidate' element={<AddCandidate/>}></Route>
      <Route path='/candidates' element={<ViewCandidates/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin } from './Signin';
import { CreateAccount } from './CreateAccount';
import { ForgotPassword } from './ForgetPasword';

function App() {
  return (
    <div className="App bg-danger App-height">   
      <Routes>
      
        <Route path='/' element={<Signin/>}/>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;

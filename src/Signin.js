import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import { Link } from "react-router-dom";

export function Signin() {
    return (
      <div className="container bg-light  p-5 height ">
        <TextField className="p-2 textfield-width-1" id="outlined-basic" label="Email Address" variant="outlined" />
        <TextField className="p-2 textfield-width-1" id="outlined-basic" label="Password" variant="outlined" />
        
        <Link className="p-3" to="/forgotpassword"> Forget Pasword </Link>
        <div className="p-3 d-flex justify-content-between">
        <span><input className="mr-1" type="checkbox"/>Remember password</span>
        <Button className="bg-danger" variant="contained">Login</Button>
        </div>
        <span className="p-3">New user?</span><Link to="/createaccount">  Create an account!</Link>

      </div>
    );
  }
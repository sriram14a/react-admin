import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function ForgotPassword() {
    return (
      <div className="container bg-light height p-5 ">
       <TextField className="p-2 textfield-width-1" id="outlined-basic" label="Email Address" variant="outlined" />
       <Button className="bg-danger m-2 mt-3" variant="contained">Send Password Reset Link</Button>
       <div className="pt-3" >
       <span className="m-2 ">New user?</span><Link to="/createaccount">  Create an account!</Link>
       </div>
      </div>
    );
  }
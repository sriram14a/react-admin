import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function CreateAccount() {
    return (
      <div className="container bg-light p-5 height">
       <TextField className="p-2 textfield-width" id="outlined-basic" label="First Name" variant="outlined" />
       <TextField className="p-2 textfield-width" id="outlined-basic" label="Last Name" variant="outlined" />
       <TextField className="p-2 textfield-width-1" id="outlined-basic" label="Email Address" variant="outlined" />
       <TextField className="p-2 textfield-width" id="outlined-basic" label="Password" variant="outlined" />
       <TextField className="p-2 textfield-width" id="outlined-basic" label="Confrim Password" variant="outlined" />
       
       <div className="d-flex justify-content-between p-3" >
       <span><input className="mr-1" type="checkbox"/>I accept the terms & conditions</span>
       <Button className="bg-danger" variant="contained">Register</Button>  
       </div>
       <p className="pl-3">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

       <span className="pl-3">Have an account?</span><Link to="/"> Sign in </Link>

      </div>
    );
  }
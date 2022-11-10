import React, { useEffect, useState} from "react";
import { GoogleLogin } from "react-google-login"
import { EmailWrapper } from "./style";
import { useHistory } from "react-router-dom";
const LoginPage = props => {
     // const { user, setUser } = useContext(dataContext);
     const history = useHistory();
     const responseGoogle = (response) => {
          // setUser(response);
          // history.push("/");
          // axios.post("https://61b2b99ac8d4640017aaf4af.mockapi.io/api/User",  response )

     }


     return (

          <EmailWrapper className="email">
               <GoogleLogin
                    clientId="1043389778367-8e684mivfqspicbl63cuv1n14q37eict.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
               />

          </EmailWrapper>

     );
}
export default LoginPage;
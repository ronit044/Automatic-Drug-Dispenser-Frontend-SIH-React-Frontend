import React,{useState} from "react";
import { Container, H2, Form, Label, Input, Button, P, A,Warning } from "./DocLoginCSS";
import Axios from "../../Axios";
function DocLogin(){
  const [Warn, setWarn] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        var { email,  password} = e.target.elements;
        const res = await Axios.post("/loginVerification", { "email": email.value, "Password": password.value });
        const r = res.data.LoginStatus;
        alert(r);
        if (r === true) {
            localStorage.setItem("email",email);
            localStorage.setItem("pswd",password);
            window.location.href = "/Dash";
        }
        else {
            setWarn(true);
        }
    }
  return (<>    
  <Container>
      <Form onSubmit={handleSubmit}>
        <H2>Doctor Login</H2>
        <Label for="email">Email:</Label>
        <Input type="email" id="email" name="email" required/>
        <Label for="password">Password:</Label>
        <Input type="password" id="password" name="password" required/>
        {Warn ? <Warning>Either Username or password is Incorrect!! try Again!!</Warning> : null}
        <Button type="submit">Login</Button>
      </Form>
      <P>Don't have an account? <A href="signup.html">Sign up</A></P>
    </Container>
    </>

  );
}

export default DocLogin;
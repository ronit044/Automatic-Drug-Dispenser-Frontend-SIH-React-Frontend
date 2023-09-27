import React from "react";
import { Container, H2, Form, Label, Input, Button, P, A } from "./DocLoginCSS";

function DocLogin(){
  return (<>    <Container>
      <Form action="login_process.php" method="post">
        <H2>Doctor Login</H2>
        <Label for="email">Email:</Label>
        <Input type="email" id="email" name="email" required/>
        <Label for="password">Password:</Label>
        <Input type="password" id="password" name="password" required/>
        <Button type="submit">Login</Button>
      </Form>
      <P>Don't have an account? <A href="signup.html">Sign up</A></P>
    </Container>
    </>

  );
}

export default DocLogin;
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../auth/authContextProvider";



function SignIn() {
  const [loginCred, setLoginCred] = React.useState({
    username: "",
    password: "",
    login: false,
    store: null,
  });

  const { login } = useContext(AuthContext);

const SignIn1 = async () => {
  let payload = {
    username: loginCred.username,
    password: loginCred.password,
  };
  await login(payload);
};

  const onChangeValue = (e) => {
    setLoginCred({ ...loginCred, [e.currentTarget.name]: e.target.value });
    console.log(loginCred);
  };

  const logout = (e) => {
    localStorage.removeItem("login");
    setLoginCred({ login: false });
  };

//   const login = () => {
//     // console.log(loginCred.username)
//     // console.log("sd",loginCred);

//     fetch("http://127.0.0.1:3001/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: loginCred.username,
//         password: loginCred.password,
//       }),
//     })
//       .then((res) => {
//         res.json().then((result) => {
//           console.log("result", result);
//           localStorage.setItem(
//             "login",
//             JSON.stringify({
//               login: true,
//               token: result?.result?.token,
//             })
//           );
//           //   setLoginCred({ login: true });
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  return (
    // <div
    //   style={{
    //     backgroundColor: "red",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "46.55rem",
    //     width: "100%",
    //   }}
    // >
    //   {loginCred.login === false ? (
    //     <div
    //       style={{
    //         backgroundColor: "white",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "200px",
    //         width: "50%",
    //       }}
    //     >
    //       {/* <form > */}
    //       <div>
    //         <label>Username</label>
    //         <br />
    //         <input
    //           type="text"
    //           id="username"
    //           name="username"
    //           onChange={onChangeValue}
    //           value={loginCred.username}
    //         ></input>
    //         <br />
    //         <label>Password</label>
    //         <br />
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           onChange={onChangeValue}
    //           value={loginCred.password}
    //         ></input>
    //         <br />
    //         <button onClick={login}>Submit</button>
    //         {/* </form> */}
    //       </div>
    //     </div>
    //   ) : (
    //     <div>
    //       Logged In
    //       <button onClick={logout}>Logout</button>
    //     </div>
    //   )}
    // </div>
    <Container className="mt-2">
      <Row>
        <Col className="col-md-8 offset-md-2">
          <legend>Login Form</legend>
          <form>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onChange={onChangeValue}
                type="text"
                name="username"
                value={loginCred.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={onChangeValue}
                type="password"
                name="password"
                value={loginCred.password}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={SignIn1}>
              Login
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;

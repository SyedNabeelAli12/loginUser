import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/signIn";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { AuthContextProvider } from "./auth/authContextProvider";
// import getProduct from './components/getProduct';
import GetProduct from "./components/getProduct";


function App() {
  // return <SignIn />;

  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path='/get-product' element={<GetProduct></GetProduct>}></Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;

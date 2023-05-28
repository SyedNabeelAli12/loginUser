import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwtDecode(tokens);
    }
    return null;
  });



  const navigate = useNavigate();

  const login = async (payload) => {
    const apiResponse = await axios.post(
      "http://127.0.0.1:3001/user/login",
      payload
    );
    console.log(apiResponse.data.result.token);
    localStorage.setItem(
      "tokens",
      JSON.stringify(apiResponse.data.result.token)
    );
    setUser(jwtDecode(apiResponse.data.result.token));

    navigate("/");
  };

  const logout = async () => {
    // invoke the logout API call, for our NestJS API no logout API
 
    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//   return (
//     <AuthContext.Provider value={{ user, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export default AuthContext;

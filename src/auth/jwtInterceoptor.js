import axios from "axios";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
  console.log(tokensData)
  config.headers['Authorization'] = `Bearer ${tokensData}`;
console.log(config)

  return config;
});
export default jwtInterceoptor;

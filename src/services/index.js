import https from "./https";
// re-write or customize this based on your requirement!
class Services {
  login = (payload) => https.post("/user/login", payload);
  signup = (payload) => https.post("/user/register", payload);
}

export default Services;

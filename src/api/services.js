import https from "./https";
// re-write or customize this based on your requirement!
class Services {
  static login = (payload) => https.post("/user/login", payload);
  static signup = (payload) => https.post("/user/register", payload);
}

export default Services;

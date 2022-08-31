import axios from "axios";
// AXIOS GLOBALS
// we can define some global config header , to be able to apply them default for all the requests made

function config() {
  axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios.defaults.baseURL = "https://api.example.com";

  /// timeout for the requests can be set for each request , can be set default or passed during an API call
  axios.defaults.timeout = 5000;
  // in each API reqeust , the default set will be automatically applied
}

config();

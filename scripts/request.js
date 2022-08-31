import axios from "axios";

// AXIOS REQUEST
// Request API calls for the specific options
// Another general and common way of doing API calls of all method types

function request() {
  /// create options object that contains all the details for the API requests
  const options = {
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
    data: {},
  };

  /// call request with Axios request
  axios
    .request(options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

request();

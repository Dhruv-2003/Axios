import axios from "axios";

// AXIOS INSTANCE
// create an instance for a certain API endpoint with the base URL
// Then use that instance for the specific API calls

function instance() {
  const axiosInstance = axios.create({
    // Other custom settings
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  // use instance to call different methods
  axiosInstance
    .get("/comments")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
instance();

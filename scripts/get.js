import axios from "axios";

function getTodos() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  /// we can limit the response with the help of params
  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      params: { _limit: 5 },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  /// or we can pass the param in the URL itself
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      params: { _limit: 5 },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  /// 2nd Method
  /// common way to request from an API by passing the method and the URL this way
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
    /// extra params can be added for fetching the data
    params: {},
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

getTodos();

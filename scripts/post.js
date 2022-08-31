import axios from "axios";

/// AXIOS POST

function addTodo() {
  /// data is passed as the second object in the post request
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    /// extra params can be added for fetching the data
    data: {
      title: "New Todo",
      completed: true,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

addTodo();

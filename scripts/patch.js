import axios from "axios";

/// AXIOS PATCH
/// it will updated the data we provide , all other data will be same as before

function updateTodo() {
  /// pass the updated data
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  /// 2nd Method
  axios({
    method: "patch",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Updated Todo",
      completed: true,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

updateTodo();

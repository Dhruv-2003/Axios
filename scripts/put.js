import axios from "axios";

/// AXIOS PUT
/// Replaces the whole data with the passed data, all old data will be deleted

function updateTodo() {
  /// 1 st Method
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  ///2nd Method
  axios({
    method: "put",
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

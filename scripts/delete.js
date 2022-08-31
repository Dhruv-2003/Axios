import axios from "axios";

// AXIOS DELETE
// Delete the speceified data
function removeTodo() {
  /// specify the ID we want to delete in the URL itself
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));

  axios({
    method: "delete",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

removeTodo();

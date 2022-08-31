import axios from "axios";

/// Custom Headers
/// Required to access protected routes by passing the API token in the header
function custom() {
  /// 1st Way

  /// create a config with the authorised tokens
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
  };

  /// pass the config as a object
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false,
      },
      config
    )
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  /// 2nd Way
  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
    /// extra params can be added for fetching the data
    data: {
      title: "New Todo",
      completed: true,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

custom();

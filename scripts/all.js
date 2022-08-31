import axios from "axios";

// AXIOS ALL
// Execute multiple request at the same time and then complete after the promise is done

// AXIOS SPREAD
// to spread the multiple responses for seperate requests

function all() {
  // multiple request can be just passed in the array and then result is also set in the same array format
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: "New Todo",
        completed: true,
      }),
    ])
    .then((res) => {
      console.log(res[0]);
      console.log(res[1]);
    })
    .catch((err) => console.error(err));

  // use of Axios Spread to maintain the response
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: "New Todo",
        completed: true,
      }),
    ])
    .then(
      axios.spread((res1, res2) => {
        console.log(res1);
        console.log(res2);
      })
    )
    .catch((err) => console.error(err));

  //   /// 1st request
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));

  //   // 2nd request
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/todos", {
  //       title: "New Todo",
  //       completed: true,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
}

all();

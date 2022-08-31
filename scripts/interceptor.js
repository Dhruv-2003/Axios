import axios from "axios";
/// To Intercept every request and response API calls
/// logs the needed data set with the help of interceptor
/// runs on each call

function intercept() {
  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().getTime()}`
      );

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

intercept();

import axios, { AxiosError } from "axios";
import BackEndError from "../utils/messages";

const url = `${process.env.REACT_APP_API_HOST}/auth/login`;

export const logInUser = async (username: string, password: string) => {
  try {
    const token = await axios.post(url, { username, password });
    return token;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response && err.response.status === 401) {
      throw new BackEndError(
        "We're not able to find this user in our database",
        err.response.status
      );
    }
    throw new BackEndError(
      "We are experiencing unhandled problems, please contact technical support",
      err.response && err.response.status ? err.response.status : 500
    );
  }
};

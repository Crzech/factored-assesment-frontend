import axios, { AxiosError } from "axios";
import BackEndError from "../utils/messages";

const url = `${process.env.REACT_APP_API_HOST}/users`;

type User = {
  name: string;
  username: string;
  email: string;
  password: string;
};
export const create = async (user: User) => {
  try {
    await axios.post(url, user);
  } catch (error) {
    const err = error as AxiosError<{ [key: string]: {} | [] }>;
    if (err.response?.status === 422 && err.response.data) {
      if (Array.isArray(err.response.data.username)) {
        throw new BackEndError(
          "Username is already taken",
          err.response && err.response.status ? err.response.status : 500
        );
      }
    }
    throw new BackEndError(
      "We are experiencing unhandled problems, please contact technical support",
      err.response && err.response.status ? err.response.status : 500
    );
  }
};

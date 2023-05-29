import axios, { AxiosError } from "axios";
import BackEndError from "../utils/messages";
import { authHeader } from "../utils/authHeader";
import Planet from "../types/planets";

const url = `${process.env.REACT_APP_API_HOST}/planets`;

export const getAllPlanets = async (token: string | undefined) => {
  try {
    return await axios.get(url, {
      headers: authHeader(token),
    });
  } catch (error) {
    const err = error as AxiosError<{ [key: string]: {} | [] }>;
    throw new BackEndError(
      "We are experiencing unhandled problems, please contact technical support",
      err.response && err.response.status ? err.response.status : 500
    );
  }
};

export const createPlanet = async (
  planet: Planet,
  token: string | undefined
) => {
  try {
    return await axios.post(url, planet, { headers: authHeader(token) });
  } catch (error) {
    const err = error as AxiosError<{ [key: string]: {} | [] }>;
    throw new BackEndError(
      "We are experiencing unhandled problems, please contact technical support",
      err.response && err.response.status ? err.response.status : 500
    );
  }
};

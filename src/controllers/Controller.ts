import axios, { AxiosResponse } from "axios";
import { CustomException } from "../exceptions";

export class Controller {
  api: any;
  service: any;
  constructor(route: string) {
    this.api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_STATIC_URI_API}/${route}`,
    });
  }

  handleErrors(error: any) {
    const response = error.response;
    let message = "Ocorreu um erro, tente novamente mais tarde.";
    if (typeof response.data.message === "string") message = response.data.message;
    else message = response.data.message[0];
    throw new CustomException(
      message ?? "Ocorreu algum erro ao conectar, tente novamente mais tarde.",
      response.status
    );
  }
}

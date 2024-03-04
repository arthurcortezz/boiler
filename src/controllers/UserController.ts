import { Controller } from "./Controller";

class AuthenticationController extends Controller {
  constructor(route: string) {
    super(route);
  }
  async login(email: string, password: string) {
    try {
      const body = {
        email,
        password,
      };
      const response = await this.api.post("/login", body);
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }
}
const AuthenticationControllerInstance = new AuthenticationController("authentication");
export default AuthenticationControllerInstance;

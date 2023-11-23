import Cookies from "js-cookie";
import { instance } from "../../utils";
const URL = "/auth";

const registerService = async (formData) => {
  const response = await instance.post(URL + "/register", formData);

  const id = response.data.id;
  const token = response.data.token;

  Cookies.set("id", id, { expires: 7 });
  Cookies.set("token", token, { expires: 7 });

  return response.data;
};

const loginService = async (formData) => {
  const response = await instance.post(URL + "/login", formData);

  const id = response.data.id;
  const token = response.data.token;

  Cookies.set("id", id, { expires: 7 });
  Cookies.set("token", token, { expires: 7 });

  return response.data;
};

const logoutService = async () => {
  Cookies.remove("id", { path: "" });
  Cookies.remove("token", { path: "" });
  return;
};

const resetPasswordService = async (formData) => {
  const response = await instance.post(URL + "/reset", formData);

  return response.data;
};

const confirmResetPasswordService = async (formData) => {
  const response = await instance.post(
    URL + "/reset/" + formData.token,
    formData
  );

  return response.data;
};

export {
  registerService,
  loginService,
  logoutService,
  resetPasswordService,
  confirmResetPasswordService,
};

import { authInstance, fileInstance } from "../../utils";

const URL = "/users";

const getUsersService = async () => {
  const response = await authInstance.get(URL);

  return response.data;
};

const getUserService = async (id) => {
  const response = await authInstance.get(URL, "/profile/", id);

  return response.data;
};

const updateUserService = async (formData) => {
  const response = await fileInstance.put(
    URL,
    "/profile/",
    formData.id,
    "/update",
    formData
  );

  return response.data;
};

const deleteUserService = async (id) => {
  const response = await authInstance.put(URL, "/profile/", id, "/update");

  return response.data;
};

export {
  getUsersService,
  getUserService,
  updateUserService,
  deleteUserService,
};

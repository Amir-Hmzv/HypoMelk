// user.service.js
import baseService from "./base.service";

export default {
  getUser: (id) => {
    return baseService.get(
      `/users/${id}`,
      (response) => response.data,
      (error) => console.error(error)
    );
  },
  createUser: (user) => {
    return baseService.post(
      "/users",
      user,
      (response) => response.data,
      (error) => console.error(error)
    );
  },
  updateUser: (id, user) => {
    return baseService.put(
      `/users/${id}`,
      user,
      (response) => response.data,
      (error) => console.error(error)
    );
  },
  deleteUser: (id) => {
    return baseService.delete(
      `/users/${id}`,
      (response) => response.data,
      (error) => console.error(error)
    );
  },
};

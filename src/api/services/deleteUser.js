import instance from "../instance";
import { deleteUser } from "../../redux/actions/alluserActionCreator";

export const deleteUserfunc = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      const response = await instance.delete(`/users/${id}`);
      console.log(response);
      dispatch(deleteUser(id));
    } catch (error) {
      console.log(error);
    }
  };
};

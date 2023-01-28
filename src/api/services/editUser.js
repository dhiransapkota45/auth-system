import instance from "../instance";

import { edituser } from "../../redux/actions/alluserActionCreator";
// export const editUser = async (data) => {
//   const response = await instance.put(`/users/${data.id}`, data);
//   console.log(response);
// };

export const editputUser = (data, id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      const response = await instance.put(`/users/${id}`, data);
      console.log(response.data);
      dispatch(edituser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

import { adduser } from "../../redux/actions/alluserActionCreator";
import instance from "../instance";

// export const postuser = async (data) => {
//     console.log(data);
//   const response = await instance.post("/users", data);
//   console.log(response);
// };

export const postuser = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/users", data);
      console.log(response);
      dispatch(adduser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

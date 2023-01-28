import {
  alluserFailure,
  alluserPending,
  alluserSuccess,
} from "../../redux/actions/alluserActionCreator";
import instance from "../instance";

export const alluser = () => {
  return async (dispatch) => {
    dispatch(alluserPending());
    try {
      const response = await instance.get("/users");
      dispatch(alluserSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(alluserFailure());
    }
  };
};

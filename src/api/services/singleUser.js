import instance from "../instance";

export const singleUser = async (setUserdata) => {
  const id = localStorage.getItem("userid") || sessionStorage.getItem("userid");
  const user = await instance.get(`/users/${id}`);
  console.log(user);
  //   return user.data;
  setUserdata(user.data);
};

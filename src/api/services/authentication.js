import instance from "../instance";

export const login = async (userdata, navigate) => {
  console.log(userdata);
  const response = await instance.get("/users");
  const checkuser = response.data.find((user) => {
    console.log(user.email, userdata.email);
    return user.email === userdata.email;
  });
  console.log(checkuser);
  if (checkuser) {
    if (checkuser.password === userdata.password) {
      console.log("matched");
      if (userdata.rememberMe) {
        localStorage.setItem("userid", checkuser.id);
      } else {
        sessionStorage.setItem("userid", checkuser.id);
      }
      navigate("/");
    } else {
      console.log("unmatched");
    }
  } else {
    console.log("user not available");
  }
};

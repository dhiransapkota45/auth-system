export const alluserPending = () => {
  return {
    type: "alluser/pending",
  };
};

export const alluserSuccess = (response) => {
  return {
    type: "alluser/success",
    payload: response,
  };
};

export const alluserFailure = () => {
  return {
    type: "alluser/failure",
  };
};

export const adduser = (userdata) => {
  return {
    type: "alluser/adduser",
    payload: userdata,
  };
};

export const edituser = (userdata) => {
  return {
    type: "alluser/edituser",
    payload: userdata,
  };
};


export const deleteUser = (id) => {
  return {
    type: "alluser/deleteuser",
    payload: id,
  };
};

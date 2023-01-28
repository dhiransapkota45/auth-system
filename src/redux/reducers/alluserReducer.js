const initialstate = {
  loading: false,
  alluser: [],
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "alluser/pending":
      return { ...state, loading: true };
    case "alluser/success":
      return { ...state, loading: false, alluser: action.payload };
    case "alluser/failure":
      return { ...state, loading: false, alluser: [] };
    case "alluser/adduser":
      let allusers = state.alluser;
      let newallusers = [...allusers, action.payload];
      return { ...state, alluser: newallusers };
    case "alluser/edituser":
      const findindex = state.alluser.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.alluser[findindex] = action.payload;
      return { ...state };
    case "alluser/deleteuser":
      const newarr = state.alluser;
      const newarr2 = newarr.filter((user) => user.id !== action.payload);
      return { ...state, alluser: newarr2 };
    default:
      return { ...state };
  }
};

export default userReducer;

//same email xa vane add user garna paidaina

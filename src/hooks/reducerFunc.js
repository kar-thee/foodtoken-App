import initialValues from "./initialValues";

const reducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    //auth
    case "signIn": {
      return {
        ...state,
        jwtToken: actionObj.payload.jwtToken,
        userData: actionObj.payload.userData,
      };
    }
    case "signOut": {
      return initialValues;
    }

    //loadingState
    case "loadingOn": {
      return { ...state, loadingState: true };
    }
    case "loadingOff": {
      return { ...state, loadingState: false };
    }

    //default
    default: {
      return state;
    }
  }
};

export default reducerFunc;

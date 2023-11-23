import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();

const initialState = {
  currentUser: null,
  lastVisitedRoute: "/",
  userEmail: null,
  userPassword: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload.user,
        userEmail: action.payload.email,
        userPassword: action.payload.password,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        userEmail: null,
        userPassword: null,
      };
    case "SET_LAST_VISITED_ROUTE":
      return {
        ...state,
        lastVisitedRoute: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = (user, email, password) => {
    dispatch({ type: "LOGIN", payload: { user, email, password } });
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
  };

  const setLastVisitedRoute = (route) => {
    dispatch({ type: "SET_LAST_VISITED_ROUTE", payload: route });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        lastVisitedRoute: state.lastVisitedRoute,
        userEmail: state.userEmail,
        userPassword: state.userPassword,
        loginUser,
        logoutUser,
        setLastVisitedRoute,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };


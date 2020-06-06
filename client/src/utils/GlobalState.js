import React, { useContext, useReducer } from "react";

const initialState = {
  profiles: [],
  curSearch: [],
  curUser: null
};

// Think of this as our main Context API that 
//will server as the Provider and Consumer to 
//handling all our data in our entire application. Global State
const StoreContext = React.createContext(); 

// Don't forget to import all of your actions!
const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_PROFILE":
      //console.log("INSIDE ADD PROFILE CASE"); //FOR DEBUG
      //console.log(action.newProfile);
      return {
          ...state,
          profiles: [action.newProfile, ...state.profiles]
      }

    case "NEW_SEARCH":
      //console.log("INSIDE NEW SEARCH CASE"); //FOR DEBUG
      //console.log(action.matches);
      return {
          ...state,
          curSearch: action.matches
      }

      case "UPDATEE_CURRENT_SEARCH":
        return {
            ...state,
            curSearch: state.curSearch.filter(collaborator => collaborator._id !== action.collaboratorId)
        }

      case "SAVE_CURRENT_USER":
        console.log("INSIDE ADD NEW USER CASE"); //FOR DEBUG
        console.log(action.user);
        return {
            ...state,
            curUser: {...action.user}
        }

    default:
      return state;
  }
};

/*
  We need a way where our components can import our Provider 
  but as they import the provider we should provide with them 
  a couple things on the initial value:
    1) state - latest and greatest data
    2) dispatch object - this will be needed if we ever needed to 
    modify state. We'll have dispatch a message to our reducer 
    who will then update the state

    value is going to be an object. For simplicity lets just make it an array
*/
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={[state, dispatch]} {...props} />;
};

/* 
  We need a way where our components can import our Consumer. 
  We are going to use the useContext hook to wire up our context API consumer.

  This consumer is going to give us the ability to get the data from our Context API Provider

*/
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext }; // There are 2 things we are exposing from our Global Context API.
// Provider
// Consumer - aka useContext Hook

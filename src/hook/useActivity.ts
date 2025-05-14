import { useEffect, useReducer } from "react";
import { activityReducer, initialState } from "../reducer/activityReducer";

export const useActivity = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities])

  return {
    state,
    dispatch
  };
}

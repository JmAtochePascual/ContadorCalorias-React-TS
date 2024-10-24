import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { ActivityAction, TActivityState, activityReducer, initialState } from "../reducer/actividadReducer";

export type ActivityProviderProps = {
  children: ReactNode;
}

export type TActivityContextProps = {
  state: TActivityState;
  dispatch: Dispatch<ActivityAction>;
}

export const activityContext = createContext<TActivityContextProps>(null!);

const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <activityContext.Provider value={{ state, dispatch }}>
      {children}
    </activityContext.Provider>
  )
}

export default ActivityProvider
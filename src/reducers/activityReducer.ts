import { TActivity } from '../types/index';

// Actions
export type ActivitydAction =
  { type: 'add-Activity'; payload: TActivity; }

type TActivityState = {
  activities: TActivity[];
}

// Initial State
export const initialState: TActivityState = {
  activities: []
}

// Reducer para manejar la lógica de las acciones
export const activityReducer = (state: TActivityState = initialState, action: ActivitydAction) => {

  if (action.type === 'add-Activity') {
    return {
      activities: [...state.activities, action.payload]
    }
  }

  return state;
}
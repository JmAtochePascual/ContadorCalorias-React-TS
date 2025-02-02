import { TActivity } from '../types/index';

// Actions
export type ActivitydAction =
  { type: 'add-Activity'; payload: TActivity; } |
  { type: 'edit-Activity'; payload: TActivity; } |
  { type: 'delete-Activity'; payload: TActivity['id']; } |
  { type: 'set-id'; payload: TActivity['id']; }

export type TActivityState = {
  activities: TActivity[];
  activeId: TActivity['id'];
}

// Initial State
export const initialState: TActivityState = {
  activities: [],
  activeId: ''
}

// Reducer para manejar la lógica de las acciones
export const activityReducer = (state: TActivityState = initialState, action: ActivitydAction) => {

  if (action.type === 'add-Activity') {
    return { ...state, activities: [...state.activities, action.payload] }
  }

  if (action.type === 'delete-Activity') {
    return { ...state, activities: state.activities.filter(activity => activity.id !== action.payload) }
  }

  if (action.type === 'edit-Activity') {
    return {
      ...state,
      activities: state.activities.map(activity => activity.id === action.payload.id ? action.payload : activity),
      activeId: ''
    }
  }

  if (action.type === 'set-id') {
    return { ...state, activeId: action.payload }
  }

  return state;
}
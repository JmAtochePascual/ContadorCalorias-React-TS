import { TActivity } from "../types"

export type ActivityAction =
  { type: 'save-activity', payload: { newActivity: TActivity } } |
  { type: 'set-activeId', payload: { id: TActivity['id'] } } |
  { type: 'delete-activity', payload: { id: TActivity['id'] } }


export type TActivityState = {
  activities: TActivity[];
  activeId: TActivity['id'];
}

export const initialState: TActivityState = {
  activities: [],
  activeId: ''
}

export const activityReducer = (state: TActivityState = initialState, accion: ActivityAction) => {

  if (accion.type === 'save-activity') {
    let newActivities: TActivity[] = [];

    if (state.activeId) {
      newActivities = state.activities.map(activity => activity.id === state.activeId ? accion.payload.newActivity : activity);
    }

    return {
      ...initialState,
      activities: state.activeId ? newActivities : [...state.activities, accion.payload.newActivity],
      activeId: ''
    }
  }

  if (accion.type === 'set-activeId') {
    return {
      ...state,
      activeId: accion.payload.id
    }
  }

  if (accion.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter(activity => activity.id !== accion.payload.id)
    }
  }

  return state;
}
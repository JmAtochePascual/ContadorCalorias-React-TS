import { TActivity } from "../types"

export type ActivityAction =
  { type: 'save-activity', payload: { newActivity: TActivity } }


type TActivityState = {
  activities: TActivity[]
}

export const initialState: TActivityState = {
  activities: []
}

export const activityReducer = (state: TActivityState = initialState, accion: ActivityAction) => {
  if (accion.type === 'save-activity') {
    return {
      ...initialState,
      activities: [...state.activities, accion.payload.newActivity]
    }
  }

  return state;
}
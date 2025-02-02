import { TRecord } from '../types/index';
// Actions
export type RecordAction =
  { type: 'addRecord'; payload: TRecord; }


// Initial State
type TRecordState = {
  records: TRecord[];
}

export const initialState: TRecordState = {
  records: []
}

// Reducer para manejar la lógica de las acciones
export const activityReducer = (state: TRecordState = initialState, action: RecordAction) => {

  if (action.type === 'addRecord') {
    return {
      records: [...state.records, action.payload]
    }
  }

  return state;
}
import { TActividad } from "../types"

export type ActividadAccion =
  { type: 'guardar-actividad', payload: { nuevaActividad: TActividad } }


type TEstadoInicial = {
  actividades: TActividad[]
}

export const estadoInicial: TEstadoInicial = {
  actividades: []
}

export const actividadReducer = (state: TEstadoInicial = estadoInicial, accion: ActividadAccion) => {
  if (accion.type === 'guardar-actividad') {
    return {
      ...estadoInicial,
      actividades: [...state.actividades, accion.payload.nuevaActividad]
    }
  }

  return state;
}
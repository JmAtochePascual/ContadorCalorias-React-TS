import { TCategory, TActivity } from "../types";

export const categories: TCategory[] = [
  { id: 1, name: 'Comida' },
  { id: 2, name: 'Ejercicio' }
]

export const INITIAL_ACTIVITY: TActivity = {
  id: '',
  category: '',
  name: '',
  calories: 0
}
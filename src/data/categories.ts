import { TCategory, TRecord } from "../types";

export const categories: TCategory[] = [
  { id: 1, name: 'Comida' },
  { id: 2, name: 'Ejercicio' }
]

export const RECORD_INITIAL: TRecord = {
  id: '',
  category: '',
  activity: '',
  calories: 0
}
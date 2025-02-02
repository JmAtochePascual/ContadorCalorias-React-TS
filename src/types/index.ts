export type TCategory = {
  id: number;
  name: string;
}

export type TRecord = {
  id: string;
  category: string;
  activity: string;
  calories: number;
}
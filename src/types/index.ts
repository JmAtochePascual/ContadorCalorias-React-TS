export type TCategory = {
  id: number;
  name: string;
}

export type TActivity = {
  id: string;
  category: string;
  name: string;
  calories: number;
}
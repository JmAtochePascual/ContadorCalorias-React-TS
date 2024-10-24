import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TActivity } from './types';

type TActivityState = {
  activities: TActivity[];
  activeId: TActivity['id'];
  addActivity: (activity: TActivity) => void;
  removeActivity: (id: TActivity['id']) => void;
  editActivity: (activity: TActivity) => void;
  setActivity: (id: TActivity['id']) => void;
  reset: () => void;
}

export const useActivityStore = create<TActivityState>()(devtools(persist(((set) => ({
  activities: [],
  activeId: '',
  addActivity: (activity) => set((state) => ({ activities: [...state.activities, activity] })),
  removeActivity: (id) => set((state) => ({ activities: state.activities.filter(activity => activity.id !== id) })),
  editActivity: (activity) => {
    set((state) => ({ activities: state.activities.map(item => item.id === activity.id ? activity : item) }));
    set({ activeId: '' });
  },
  setActivity: (id) => set({ activeId: id }),
  reset: () => set({ activities: [], activeId: '' })
})), { name: 'activity-store' }
)));
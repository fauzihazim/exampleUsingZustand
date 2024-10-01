import { create } from 'zustand';

const useStore = create((set) => ({
  firstName: '',
  lastName: '',
  gender: '',
  items: [],
  addItem: (newItem) => set((state) => ({
    items: [...state.items, newItem]
  }))
}));

export default useStore;
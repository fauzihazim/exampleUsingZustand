import { create } from "zustand";

const useStore = create((set) => ({
  firstName: '',
  lastName: '',
  gender: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  setGender: (gender) => set(() => ({ gender: gender })),
  // data: {}, // Initial state for your data object
  data: [],
  setData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
}));

export default useStore;
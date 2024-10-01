import { create } from "zustand";

const UseCount = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 })
    // setCount: (count) => set(() => ({ count })),
}));

export default UseCount;
// import { create } from 'zustand';

// const UseCount = create((set) => ({
//     count: 2,
//     setCount: (count) => set(() => ({ count: count }))
// }));

// export default UseCount;
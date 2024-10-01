import { create } from "zustand";
// import { UserObject } from "../pages/login";

// interface Store {
//   user: UserObject;
//   setUser: (data: any) => void;
//   setFavoriteMovie: (id: number) => any;
// }

const emptyUserObject = {
  username: "",
  email: "",
  nama: "",
//   favoriteMovies: [],
};

const userStore = create((set) => ({
    // username: emptyUserObject.username,
    // email: emptyUserObject.email,
    // nama: emptyUserObject.nama,
    // setUsername: (username) =>  set(() => ({ username: username })),
    // setEmail: (email) =>  set(() => ({ email: email })),
    // setNama: (nama) =>  set(() => ({ nama: nama })),
    user: emptyUserObject,
    setUser: (data) => {
        set(() => ({ user: data }));
    },
    // setFavoriteMovie: (id: number) => {
    //     set((state) => ({
    //     user.favoriteMovies: [...state.user.favoriteMovies, id],
    //     })),
    // }
}));

export default userStore;

// import { create } from "zustand";
// import { UserObject } from "../pages/login";

// interface Store {
//   user: UserObject;
//   setUser: (data: any) => void;
//   setFavoriteMovie: (id: number) => any;
// }

// const emptyUserObject = {
//   username: "",
//   email: "",
//   name: "",
//   favoriteMovies: [],
// };

// const userStore = create<Store>((set, get) => ({
//   user: emptyUserObject,
//   setUser: (data: UserObject) => {
//     set(() => ({ user: data }));
//   },
//   setFavoriteMovie: (id: number) => {
//     set((state) => ({
//       user.favoriteMovies: [...state.user.favoriteMovies, id],
//     })),
//   }
// }));
import { create } from 'zustand'

const UsePersonTempStore = create((set) => ({
    firstName: '',
    lastName: '',
    gender: '',
    // dataPerson: {},
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName })),
    setGender: (gender) => set(() => ({ gender: gender })),
    // setDataPerson: [(updateFirstName) => set(() => ({ updateFirstName: updateFirstName })), (updateLastName) => set(() => ({ updateLastName: updateLastName }))]
}))

export default UsePersonTempStore;
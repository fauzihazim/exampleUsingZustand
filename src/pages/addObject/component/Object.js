// // import useCount from "../../store/useCount";
// import { Link } from 'react-router-dom';
// import userStore from '../store/UseObject';

// const Object = () => {
//     // const { username, email, nama, setUsername, setEmail, setNama, emptyUserObject } = userStore();
//     const { user, setUser } = userStore();

//     const handleSubmit = (event) => {
//         // event.preventDefault();
//         // alert(`The name you entered was: Username = ${username} email = ${email}, nama = ${nama}`);
//         // console.log(emptyUserObject);
//         // setUsername("");
//         // setEmail("");
//         // setNama("");
//         event.preventDefault();
//         alert(`The name you entered was: Username = ${username} email = ${email}, nama = ${nama}`);
//         // console.log(emptyUserObject);
//         // setUsername("");
//         // setEmail("");
//         // setNama("");
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
//             </label>
//             <label>
//                 Email: <input name="myInput" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
//             </label>
//             <label>
//                 Nama: <input name="myInput" value={nama} onChange={(e) => setNama(e.currentTarget.value)} />
//             </label>
//             {/* <DropDownTemplate options={genderOptions} key={genderOptions.id}/> */}
//             {/* <input type="submit" disabled={!username.replace(/\s/g, "") || !email.replace(/\s/g, "") || !nama.replace(/\s/g, "")}/> */}
//             <input type="submit"/>
//         </form>
//     )
//     // return (
//     //     <>
//     //         {/* <button onClick={() => setCount(count + 1)}>Count is {count}</button> */}
//     //         <Link to="/"><button>Back</button></Link><br />
//     //         <button onClick={() => increment()}>Increment</button>
//     //         <button onClick={() => decrement()}>Decrement</button>
//     //         <button onClick={() => resetCount()}>Reset Count</button>
//     //         <br />
//     //         {count}
//     //     </>
//     // )
// }

// export default Object;
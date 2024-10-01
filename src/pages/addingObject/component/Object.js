import React from 'react';
// import useStore from './store/UsePerson';
import userStore from '../store/UseObject';

const MyComponent = () => {
  const { firstName, lastName, gender, updateFirstName, updateLastName, setGender, data, setData } = userStore();
// const { data, setData } = userStore();

//   const updateData = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${firstName} ${lastName}, gender is ${gender}`);
//     setData({ firstName: {firstName}});
//     updateFirstName("");
//     updateLastName("");
//     setGender("");
//   };
const updateData = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${firstName} ${lastName}, gender is ${gender}`);
    setData({ id: data.length + 1, firstName, lastName});
    updateFirstName("");
    updateLastName("");
    setGender("");
};

  return (
    <div>
      {/* <button onClick={updateData}>Update Data</button> */}
        <form onSubmit={updateData}>
            <label>
                First name: <input value={firstName} onChange={(e) => updateFirstName(e.currentTarget.value)} />
            </label>
            <label>
                last name: <input name="myInput" value={lastName} onChange={(e) => updateLastName(e.currentTarget.value)} />
            </label>
            <input type="submit" disabled={!firstName.replace(/\s/g, "") || !lastName.replace(/\s/g, "")}/>
        </form>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <pre>{JSON.stringify(data)}</pre>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.firstName}</li>
          ))}
        </ul> */}
    </div>
  );
};

export default MyComponent;

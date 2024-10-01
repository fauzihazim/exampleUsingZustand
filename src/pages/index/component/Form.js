import UsePersonTempStore from "../store/UseName";

const DropDownTemplate = ({options}) => {
    const { gender, setGender } = UsePersonTempStore();
    let optionItems = options.map((item) =>
      <option key={item.id} value={item.value}>{item.label}</option>
    );
    return (
      <>
        <div className="form-group">
          <label htmlFor="dropdown1">
            <select name="" id="dropdown1" value={gender} onChange={(evt)=>setGender(evt.target.value)}>
              {optionItems}
            </select>
          </label>
        </div>
        {/* <h1>{gender}</h1> */}
      </>
    )
}

const Form = () => {
    const { firstName, lastName, updateFirstName, updateLastName, gender, setGender } = UsePersonTempStore();
    const genderOptions = [{id:0, label: "Select Gender"}, { id:1, label:"Male", value:"male" }, { id:2, label: "Female", value:"female" }]
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${firstName} ${lastName}, gender is ${gender}`);
        updateFirstName("");
        updateLastName("");
        setGender("");
    };
    return (
      <form onSubmit={handleSubmit}>
          <label>
              First name
              <input value={firstName} onChange={(e) => updateFirstName(e.currentTarget.value)} />
          </label>
          <label>
              last name: <input name="myInput" value={lastName} onChange={(e) => updateLastName(e.currentTarget.value)} />
          </label>
          <DropDownTemplate options={genderOptions} key={genderOptions.id}/>
          <input type="submit" disabled={!firstName.replace(/\s/g, "") || !lastName.replace(/\s/g, "") || !gender.replace(/\s/g, "")}/>
      </form>
    )
}

export default Form;
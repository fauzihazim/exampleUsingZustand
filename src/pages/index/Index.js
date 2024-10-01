import React, { useState } from 'react';
import useStore from './store/UsePerson';

const ItemList = () => {
  const items = useStore((state) => state.items);
  const addItem = useStore((state) => state.addItem);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleAddItem = () => {
    addItem({ id: items.length + 1, firstName: firstName, lastName: lastName });
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Add First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Add Last Name' />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>id: {item.id}, first name: {item.firstName}, last name: {item.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

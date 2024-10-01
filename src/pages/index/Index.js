import React, { useState } from 'react';
import useStore from './store/UsePerson';// Adjust the import path as necessary

const ItemList = () => {
  const items = useStore((state) => state.items);
  const addItem = useStore((state) => state.addItem);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    addItem({ id: items.length + 1, name: newItem });
    setNewItem('');
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

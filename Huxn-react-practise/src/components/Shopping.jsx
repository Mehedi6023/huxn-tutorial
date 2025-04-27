import React, { useState } from "react";

const Shopping = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !quantity || parseInt(quantity) <= 0) return;

    const newItem = {
      name: name.trim(),
      quantity: parseInt(quantity),
    };

    setItems((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shopping;

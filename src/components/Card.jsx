import { useState } from "react";

const Card = ({ id, title, price, description }) => {
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => {
    setItemCount((prevItemCount) => prevItemCount + 1);
  };

  return (
    <>
      <h2>{title}</h2>
      <h3>Price: ${price}</h3>
      <p>{description}</p>
      <button onClick={addItem}>-</button>
      <div>{itemCount}</div>
      <button onClick={addItem}>+</button>
      
    </>
  );
};

export default Card;

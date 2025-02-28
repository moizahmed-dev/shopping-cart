const Card = ({ id, title, price, description }) => {
  return (
    <>
          <h2>{title}</h2>
          <h3>Price: ${price}</h3>
          <p>{description}</p>
    </>
  );
};

export default Card;

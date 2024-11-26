const Card = ({ title, description }) => {
  return (
    <div className="border">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
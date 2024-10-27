function Card({ name, rating }) {
    return (
      <>
        <div className="card">
          <h3>{name}</h3>
          <p>Rating: {rating}</p>
        </div>
      </>
    );
  }
  
  export default Card;
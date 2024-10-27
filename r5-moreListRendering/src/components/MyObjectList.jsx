import Card from "./Card";

function MyObjectList() {
  const techRatings = [
    {
      name: "Javascript",
      rating: 9,
    },
    {
      name: "React",
      rating: 2,
    },
    {
      name: "Swift",
      rating: 7,
    },
    {
      name: "Typescript",
      rating: 8,
    },
    {
      name: "VueJS",
      rating: 10,
    },
  ];

  return (
    <>
      <p>{techRatings.length}</p>
      <div className="cardContainer">
        {techRatings.map((value) => (
          <div className="card" key={value}>
            <h3>{value.name}</h3>
            <p>Rating: {value.rating}</p>
          </div>
        ))}
      </div>
      <br />
      <div className="cardContainer">
        {techRatings.map((value) => (
          <Card name={value.name} rating={value.rating} key={value} />
        ))}
      </div>
    </>
  );
}
export default MyObjectList;
function RightContainer ( {image, name, weight, height, types} ) {
    return (
        <>
            <div id="rightContainer">
            <img src={image} />
            <h3>{name}</h3>
            <p>
                Types:{" "}
                {types.map((value) => (
                <span className="type">{value.type.name}</span>
                ))}
            </p>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            </div>
        </>
    );
}

export default RightContainer;

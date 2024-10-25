function MyList() {
    const games = [
        "Street Fighter",
        "Street Fighter II",
        "Street Fighter III",
        "Street Fighter IV",
        "Street Fighter 5",
        "Street Fighter 6"
    ]

    function addGame() {
        const rand = parseInt(Math.random() * 100) + 7;
        games.push("Street Fighter" + rand);
    }

    return(
        <>
            <button onClick={addGame}>Add Game!</button>
            <ul>
                {games.map((value) => (
                    <li>{value}</li>
                ))}
            </ul>
        </>
    );
}

export default MyList;
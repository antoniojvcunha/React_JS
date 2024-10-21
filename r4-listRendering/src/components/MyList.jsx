function MyList() {
    const shoppingList = ["ovos", "batatas", "maçãs", "peras", "iogurtes"];

    return(
        <>
            <h2>My List:</h2>
            <ul>
                {shoppingList.map((value) => (
                    <li>{value}</li>
                ))}
            </ul>
        </>
    );
}

export default MyList;
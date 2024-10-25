function MyObjectList() {
    const techRatings = [
        {
            languageName: "Javascript",
            rating: 9
        },
        {
            languageName: "React",
            rating: 2
        },
        {
            languageName: "Swift",
            rating: 7
        },
        {
            languageName: "Typescript",
            rating: 8
        },
        {
            languageName: "VueJS",
            rating: 10
        },

    ];

    return (
        <>
            <ul>
                {techRatings.map((value) => (
                    <div>
                        <h3>{value.languageName}</h3>
                        <p>Rating: {value.rating}</p>
                    </div>
            ))}
            </ul>
        
        </>
    )
}

export default MyObjectList;
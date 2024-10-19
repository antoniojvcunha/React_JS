function Card({username, image, email, name}) {

    return (
        <>
            <div className="card">
                <img src={image}/>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Username: {username}</p>
            </div>
        </>

    ); 
}

export default Card
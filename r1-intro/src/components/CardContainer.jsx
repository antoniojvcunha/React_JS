import Card from "./Card";

function CardContainer() {
    return (
        <>
            <div className="cardContainer">
                <Card 
                    name="Homer" 
                    username="H0mer" 
                    email="homer@gmail.com" 
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.og3NHvhoYpPhLw0iME0D0gHaKe%26pid%3DApi&f=1&ipt=1aad45c6abcbbe899a991c9d195e33eee27b0b0ede1bd793d23b33a13ddf0b6d&ipo=images"
                />

                <Card 
                    name="Marge" 
                    username="Margee3" 
                    email="Marge@gmail.com" 
                    image="https://pngimg.com/uploads/simpsons/simpsons_PNG56.png"
                />

                <Card 
                    name="Bart" 
                    username="Bartoleto" 
                    email="Bart@gmail.com" 
                    image="https://pngimg.com/uploads/simpsons/simpsons_PNG73.png"
                />

                <Card 
                    name="Lisa" 
                    username="LisaMONA" 
                    email="lisa@gmail.com" 
                    image="https://i.pinimg.com/736x/95/b6/57/95b657229390663eb69ea8a2850c21e7.jpg"
                />
            </div>
        </>
    ); 
}

export default CardContainer;
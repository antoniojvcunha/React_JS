import { useEffect, useState } from "react";

function CryptoInfo() {

    const [cryptoId, setCryptoId] = useState("");
    
    const [cryptoData, setCryptoData] = useState({
        name: "Loading asset...",
        rank: "",
        symbol: "",
        price: "",
        marketCapUsd: ""
    });

    async function fetchCrypto(id) {
       
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
        const result = await response.json();
        
        const asset = result.data;

                setCryptoData({
                    name: asset.name,
                    rank: asset.rank,
                    symbol: asset.symbol,
                    price: parseFloat(asset.priceUsd).toFixed(2),
                    marketCapUsd: parseFloat(asset.marketCapUsd).toFixed(2)
                });
     } 
        

    useEffect(() => {
        fetchCrypto(cryptoId); // Fetch crypto data whenever cryptoId changes
    }, [cryptoId]);

   

    const handleInputChange = (event) => {
        setCryptoId(event.target.value);
    };

    return (
        <>
            <div className="cryptoCard_container">
                <div className="card_header">{cryptoData.name}</div>
                <div className="card_content">
                    <div className="info_item">
                        <span>Rank: {cryptoData.rank}</span>
                    </div>
                    <div className="info_item">
                        <span>Symbol: {cryptoData.symbol}</span>
                    </div>
                    <div className="info_item">
                        <span>Price: {cryptoData.price} $</span>
                    </div>
                    <div className="info-item">
                        <span>Market Cap: {cryptoData.marketCapUsd} $</span>
                    </div>
                </div>
            </div>
            <div className="input_container">
                <label>Enter Asset Name: </label>
                <input 
                    type="text"
                    value={cryptoId} 
                    onChange={handleInputChange} 
                    placeholder="Enter asset ID (e.g., bitcoin)"
                />
            </div>
        </>
    );
}

export default CryptoInfo;

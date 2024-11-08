import { useState } from "react";
import { useEffect } from "react"
import ProductsList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    (async function () {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      
      setProducts(result.products);
    })();

  }, []);


  return (
    <>
      <ProductsList products={products}/>
    </>
  )
}

export default App

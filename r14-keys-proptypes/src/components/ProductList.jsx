import PropTypes from "prop-types"

ProductsList.propTypes = {
    products: PropTypes
};


function ProductsList({ products }) {
    return (
        <>
            <ul>
                {products.map((value) => (
                 <li key={value.id}>{value.title}</li>
            ))}
            </ul>
        </>
    );
}

export default ProductsList;
import React from 'react'

const Product = (props) => {
        let {
                productName, 
                productFinalPrice,
                productInStock,
                productImage,
                productPrice,
                productRating,
                productWeight,
                productWeightUnit
            } = props;

        productWeight = parseInt(productWeight);
        
        return (
            <div className="productContainer">
                <div className="productImage">
                    <img src={productImage.x300} alt={productImage.x300} />
                </div>
                <div className="productDescriptionContainer">
                    <div className="productDescription">
                        <div className="productTitle">
                            <p>{productName}</p>
                        </div>
                        <div className="productWeight">
                            {console.log(typeof(productWeight))}
                            { productWeight !== undefined ? productWeight !== 0 ? '( ' + productWeight + ' ' + productWeightUnit + ' )' : '' : ''}
                        </div>
                        <div className="productPrice">
                            <div className="productSpecialPrice">
                            &#x20B9; {productFinalPrice}
                            </div>
                            <div className="productOriginalPrice">
                            &#x20B9; {productPrice}
                            </div>
                        </div>
                        <div className="productButton">
                            <button className={productInStock ? 'inStockButton' : 'outOfStockButton'}>{productInStock ? 'Add to Cart' : 'Out of Stock'}</button>
                        </div>
                </div>
                <div className="productRating">
                    {productRating !== null ? <span>{productRating} &#9733;</span> : ''}
                </div>
            </div>
        </div>
    )
}

export default Product;

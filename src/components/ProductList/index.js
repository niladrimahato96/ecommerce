import React, { Component, Fragment } from 'react'
import Product from '../Product';

class ProductList extends Component {
    render() {
        let productFormat = this.props.productFormat;
        let productList = [];
        if(productFormat === "application/json;"){
            let { products } = this.props.products;
            if(products !== undefined){
                if(Object.keys(products).length !== 0){
                    productList = products.map(product => 
                        <Product 
                            key={product.id}
                            productName={product.name}
                            productFinalPrice={product.final_price}
                            productId={product.id}
                            productInStock={product.is_in_stock}
                            productImage={product.image_urls}
                            productPrice={product.price}
                            productWeight={product.weight}
                            productWeightUnit={product.weight_unit}
                            productRating={product.hasOwnProperty('rating') ? product.rating : null}
                        />);
                }   
            }
        }else{
            let count = this.props.products[0].getElementsByTagName('count')[0];
            
            if(count !== 0){
                
                let products = this.props.products[0].getElementsByTagName('products')[0].childNodes;
                for(let i = 0; i < products.length ; i++){
                    if(products[i].nodeName !== "#text"){
                        productList.push(
                            <Product
                            key={products[i].getElementsByTagName('id')[0].innerHTML}
                            productName={products[i].getElementsByTagName('name')[0].innerHTML}
                            productFinalPrice={products[i].getElementsByTagName('final_price')[0].innerHTML}
                            productId={products[i].getElementsByTagName('id')[0].innerHTML}
                            productInStock={products[i].getElementsByTagName('is_in_stock')[0].innerHTML}
                            productImage={{x300: products[i].getElementsByTagName('x300')[0].innerHTML}}
                            productPrice={products[i].getElementsByTagName('price')[0].innerHTML}
                            productWeight={products[i].getElementsByTagName('weight')[0].innerHTML}
                            productWeightUnit={products[i].getElementsByTagName('weight_unit')[0].innerHTML}
                            productRating={products[i].getElementsByTagName('rating')[0] !== undefined ? products[i].getElementsByTagName('rating')[0].innerHTML : null}
                            />
                        );
                    }
                }
            }
        }
        
        return (
            <Fragment>
                {productList}
            </Fragment>
        )
    }
}

export default ProductList;

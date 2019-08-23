import React from 'react'
import CategoryTabs from '../CategoryTabs';

const ProductCategory = ({ categories, heading, changeCategory }) => {
    let categoryTabs = '';
    if(categories.length !== 0){
        categoryTabs = categories.map(category => <CategoryTabs key={category.category_id} changeCategory={changeCategory} categoryId={category.category_id} categoryName={category.category_name} categoryImage={category.category_image} />)
    }
    return (
        <div className="productCategory">
            <h2>{heading}</h2>
            <div className="categoryHorizontalScroll">
                <div className="categoryListing">
                    {categoryTabs}
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;

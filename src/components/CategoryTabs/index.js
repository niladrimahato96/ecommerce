import React from 'react'

const CategoryTabs = ({categoryImage, categoryName, categoryId, changeCategory}) => {
    let background = { backgroundImage: `url("${categoryImage}")`};
        
    return (
        <div className="categoryTabContainer">
            <div className="categoryTab" style={background} onClick={() => changeCategory(categoryId)}>
                {categoryName}
            </div>
        </div>
    )
}

export default CategoryTabs;

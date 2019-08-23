import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import ProductList from './components/ProductList';

class App extends React.Component {

  state = {
    categoryList: [],
    productList: {},
    heading: '',
    dataFormat: 'application/json;',
    loading: false
  }

  componentDidMount(){
    axios.get("/rest/V1/api/homemenucategories/v1.0.1?device_type=mob")
    .then(response => {
      this.setState({
        categoryList: response.data.category_list,
        productList: response.data.product_list,
        heading: response.data.heading
      })
    }).catch(err => {
      console.log(err);
    })
  }

  changeCategoryHandler = (id) => {
    this.setState({loading: true});
    axios.get("/rest/V1/api/catalog/v1.0.1?category_id="+id)
    .then(response => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(response.data, "text/xml");
      let dataFormat = "application/json;";
      let productList = '';
      if(response.headers['content-type'].split(" ")[0] === "application/xml;"){
        dataFormat = "application/xml;";
        productList = xmlDoc.getElementsByTagName('response');
      }else{
        productList = {
            products: response.data.products,
            count: response.data.count
          };
      }
      this.setState({
        productList,
        dataFormat,
        loading: false
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render(){
    let { categoryList, heading, productList, dataFormat, loading } = this.state;
    return (
      <div className="App">
        <Header loading={loading}/>
        <ProductCategory categories={categoryList} heading={heading} changeCategory={this.changeCategoryHandler} />
        <ProductList products={productList} productFormat={dataFormat}/>
      </div>
    );
  }
}

export default App;

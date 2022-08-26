import React from "react";
import ProductsList from "../../components/productsLIst/ProductsList";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products:[],input:""}
  }

  getProduct = ()=> {
    this.setState({products: ["apple","orange","apricot"]})
  }

  changeInput = (e) => {
    this.setState({input: e.target.value})
  }
  addProduct = () => {
    this.setState({products: [...this.state.products,this.state.input]})
    this.setState({input: this.state.input = ""})
  }

  deleteProduct = () => {
    this.setState({products: [delete this.state.products]})
  }

  sayHello = () => {
    alert("Let's do it")
  }


  render() {
    return(
      <div>
        <h1>Products list</h1>
        <input type="text" value={this.state.input} onChange={this.changeInput}/>
        <button onClick={this.getProduct} onContextMenu={this.sayHello}>Get product</button>
        <button onClick={this.addProduct}>add products</button>
        <button onClick={this.deleteProduct}>Delete</button>
        <ProductsList productsList={this.state.products}/>

      </div>
    )
  }
}
export default ProductsPage





import Products from "./products.json";
import "./App.css";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <>
      <Cart />
      <div className="products">
        {Products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styles from "./App.module.scss";
import { Products } from "./pages/products/Products";
import { Product } from "./pages/product/Product";
import { CreateProduct } from "./pages/createProduct/CreateProduct";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/create-product" element={<CreateProduct />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styles from "./App.module.scss";
import { Products } from "./pages/products/Products";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
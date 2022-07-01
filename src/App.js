import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./layout/Header/Header";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/<any value>

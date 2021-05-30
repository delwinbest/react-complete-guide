import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (params) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (params) => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main className="">
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

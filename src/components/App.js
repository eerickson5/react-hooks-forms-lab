import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import {ItemsProvider} from "./ItemsProvider";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <ItemsProvider>
        <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
        <ShoppingList/>
      </ItemsProvider>
    </div>
  );
}

export default App;

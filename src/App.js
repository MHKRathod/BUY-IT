import { useState } from "react";
import Header from "./components/layout/Header.js";
import SubHeader from "./components/layout/SubHeader.js";
import Products from "./components/products.js"

const App = () => {
  const [cartItems,setCartItems] = useState(0)

  const handleAddItem = () => {
    setCartItems(cartItems +1)
  }
  const handleRemoveItem = () => {
    setCartItems(cartItems - 1)
  }

  return (
    <div>
      <Header count={cartItems}/>
      <SubHeader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
    </div>
  )
}

export default App
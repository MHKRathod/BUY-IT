import { useState } from "react";
import Header from "./components/layout/Header.js";
import SubHeader from "./components/layout/SubHeader.js";
import Products from "./components/Products.js"

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: ""
  })

  const handleAddItem = item => {
    // setCartItems(cartItems + 1)
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(index>-1){
      item[index]=item
    }
    else{
      items.push(item)
    }
    setCartItems([...items])
  }

  const handleRemoveItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(items[index].quantity === 0) {
      items.splice(index, 1)
    }
    else {
      items[index] = item
    }
    setCartItems([...items])
    // setCartItems(cartItems - 1)
  }

  const handleEventQueue = (id, type) => {
    setEventQueue({
      id,
      type
    })
  }

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <SubHeader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react"
import ListItems from "./ListItems"
import axios from "axios"
import Loader from "./UI/Loader"

const Products = ({ onAddItem, onRemoveItem, eventState }) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const[presentItems,setPresentItems] = useState([]) 

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://react-2021-dd662-default-rtdb.firebaseio.com/items.json')
                const data = response.data 
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,
                        id: index
                    }
                })
                // setLoader(false)
                setItems(transformedData)   
            } 
            catch (error) {
                // setLoader(false)
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();
    }, [])

    useEffect(() => {
        if(eventState.id > -1) {
            if(eventState.type === 1) {
                handleAddItem(eventState.id)
            }
            else if(eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }
    }, [eventState])
    
    const handleAddItem = id => {
        console.log(id)
        // if(presentItems.indexOf(id)>-1){
        //     return
        // }
        // setPresentItems([...presentItems, id])
        // onAddItem();
        let data=[...items]
        let index=data.findIndex(i => i.id === id)
        data[index].quantity +=1
        setItems(data)
        onAddItem(data[index])
    }

    
    const handleRemoveItem = id => {
        // let index=presentItems.indexOf(id)
        // if(index>-1){
        //     let items=[...presentItems]
        //     items.splice(index,1)
        //     setPresentItems([...items])
        //     onRemoveItem()
        // }
        
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if(data[index].quantity!==0){
            data[index].quantity-=1
        setItems(data)
        onRemoveItem(data[index]);
        }
    }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItems onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}/>)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products

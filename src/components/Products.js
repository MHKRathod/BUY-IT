import { useEffect, useState } from "react"
import ListItems from "./ListItems"
import axios from "axios"
import Loader from "./UI/Loader"

const Products = ({onAddItem,onRemoveItem}) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [presentItems, setPresentItems] = useState([])

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json')
                const data = response.data

                console.log('Type of data:', typeof data);
                console.log('Content of data:', data);

                const dataArray = Object.values(data);
                const transformedData = dataArray.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                setItems(transformedData)   
            } 
            catch (error) {
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();
    }, [])

 
    const handleAddItem = id => {
        if(presentItems.indexOf(id)>=0){
            return;
        }
        setPresentItems([...presentItems,id])
        onAddItem();
    }

    const handleRemoveItem = id => {
        let index = presentItems.indexOf(id)
        if(index > -1){
            let items = [...presentItems]
            items.splice(index, 1)
            setPresentItems([...items])
            onRemoveItem();
        }
    }

    // const updateItemTitle = async (itemId) => {
    //     console.log(`Item with ID: ${itemId}`)
    //     try {
    //         let title = `Update Title #Item-${itemId}`
    //         await axios.patch(`https://react-guide-2021-default-rtdb.firebaseio.com/items/${itemId}.json`, {
    //             title: title
    //         })
    //         let data = [...items]
    //         let index = data.findIndex(e => e.id === itemId)
    //         data[index]['title'] = title

    //         setItems(data)
    //     }
    //     catch(error) {
    //         console.log("Error Updating the data!");
    //     }
    // }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItems onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
        { loader && <Loader/> }
        </>
    )
}

export default Products
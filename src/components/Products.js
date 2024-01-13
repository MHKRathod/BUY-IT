import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import axios from "axios";
import Loader from "./UI/Loader";

const Products = ({ onAddItem, onRemoveItem }) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const [presentItems, setPresentItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json');
                const data = response.data;
                
                // Check if data is an array before mapping
                const transformedData = Array.isArray(data)
                    ? data.map((item, index) => ({
                          ...item,
                          id: index
                      }))
                    : [];

                // setLoader(false)
                setItems(transformedData);
            } catch (error) {
                // setLoader(false)
                console.log("Error: ", error);
                alert("Some error occurred");
            } finally {
                setLoader(false);
            }
        }

        fetchItems();
    }, []);

    const handleAddItem = (id) => {
        if (presentItems.indexOf(id) > -1) {
            return;
        }
        setPresentItems([...presentItems, id]);
        onAddItem();
    };

    const handleRemoveItem = (id) => {
        let index = presentItems.indexOf(id);
        if (index > -1) {
            let items = [...presentItems];
            items.splice(index, 1);
            setPresentItems([...items]);
            onRemoveItem();
        }
    };

    return (
        <>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {items.map((item) => {
                        return (
                            <ListItems
                                onAdd={handleAddItem}
                                onRemove={handleRemoveItem}
                                key={item.id}
                                data={item}
                            />
                        );
                    })}
                </div>
            </div>
            {loader && <Loader />}
        </>
    );
};

export default Products;

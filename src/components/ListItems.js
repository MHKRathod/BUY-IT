import {useState} from "react";


const ListItems = ({data}) => {

    const [message,setMessage] = useState("not added to cart")

    // const handleclick = () => {
    //     setMessage("added to cart");
    //     console.log("clicked",message)
    // }
    return (
        <div className={"item-card"}>
            <img src={`/assets/${data.thumbnail}`} alt="some image"></img>
            <div className={"item-card_information"}>
                <div className={"pricing"}>
                    <span>
                        ${data.discountedPrice}
                    </span>
                    <small>
                        <strike>${data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
                <small className={"cart-message"} onClick={ () => {console.log("clicked", data)}}>message</small>
                    <button>
                        <span>Add to cart</span>
                    </button>
            </div>
        </div>
       
    )
}

export default ListItems
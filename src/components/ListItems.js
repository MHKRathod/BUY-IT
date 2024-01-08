const ListItems = ({data}) => {
    console.log(data)
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
                <button className={"cart-add"} onClick={ () => {console.log("clicked", data)}}>
                    <span>Add To Cart</span>
                    <img src></img>
                </button>
            </div>
        </div>
       
    )
}

export default ListItems
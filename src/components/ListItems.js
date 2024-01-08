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
                    <h3>{data.tigittle}</h3>
                </div>
              
            </div>
        </div>
       
    )
}

export default ListItems
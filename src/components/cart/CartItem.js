<<<<<<< HEAD
const CartItem = ({data,onEmitDecreaseItem, onEmitIncreaseItem}) => {
    return(
            <div className="checkout-modal_list-item">
                <div className="img-wrap">
                    <img src={`/assets/${data.thumbnail}`} className="img-fluid" alt={data.title}/>
                </div>
                <div className="information">
                    <div>
                        <h4>{data.title}</h4>
                        <div className="pricing">
                            <span>{data.discountedPrice}</span>
                            <small>
                                <strike>{data.price}</strike>
                            </small>
                        </div>
                    </div>
                    <div className="cart-addon cart-addon__modal">
                    <button onClick={() => onEmitDecreaseItem(data.id)}>-</button>
                    <span className="counter">{data.quantity}</span>
                    <button onClick={() => onEmitIncreaseItem(data.id)}>+</button>
                    </div>
                </div>
            </div>
    )
}
=======
const CartItem = ({ data, onEmitDecreaseItem, onEmitIncreaseItem }) => {
    // Check if 'data' is defined before accessing its properties
    if (!data || !data.thumbnail) {
        // You can return some default content or handle the error in a way that makes sense for your application
        return (
            <div className="checkout-modal_list-item">
                <p>Error: Unable to retrieve product information.</p>
            </div>
        );
    }

    return (
        <div className="checkout-modal_list-item">
            {/* The rest of your component remains unchanged */}
        </div>
    );
};
>>>>>>> 72b56e9 (1)

export default CartItem;
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

export default CartItem;
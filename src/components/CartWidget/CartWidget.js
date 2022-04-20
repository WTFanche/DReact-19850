import { useCartContext } from "../CartContext/CartContext"

function Cartwidget() {
    const { cartQty, cartList } = useCartContext()
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid logoCarro"src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG7.png" alt="imgCarrito"></img>
                    </div>
                    <div className="col-6 text-reset totalItem">
                        {
                            cartList.length > 0 &&
                            <p>{cartQty()}</p>             
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


export default Cartwidget;
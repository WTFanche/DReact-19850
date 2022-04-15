import 'bootstrap/dist/css/bootstrap.min.css'
import { useCartContext } from "./CartContext"

function Cartwidget() {
    const { cartQty, cartList } = useCartContext()
    return(
        <>
            <div>
                <img className="img-fluid"src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG7.png" alt="imgCarrito"></img>
                {
                    cartList.length > 0 &&
                    <h5 >{cartQty()}</h5>             
                }
            </div>
        </>
    );
}


export default Cartwidget;
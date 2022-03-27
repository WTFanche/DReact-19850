import { useCartContext } from "./CartContext"

function Cart() {

  const { cartList, deleteCart } = useCartContext()

    return (
      <center>
        {cartList.map(prod => 
          <li key={prod.id}> 
            Nombre: {prod.name} <br></br>
            Precio: ${prod.price} <br></br>
            Cantidad: {prod.cantidad}
          </li>
        )}
        <br></br>
        <button onClick={deleteCart} className="btn btn-danger btn-sm">
          Vaciar Carrito
        </button>
      </center>
    )
  }
  
export default Cart
  
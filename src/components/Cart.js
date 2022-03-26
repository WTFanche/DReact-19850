import { useCartContext } from "./CartContext"

function Cart() {

  const { cartList, deleteCart } = useCartContext()

    return (
      <center>
        {cartList.map(prod => 
          <li key={prod.id}> 
            Nombre: {prod.name}
            Precio: {prod.price}
          </li>)}
        <button onClick={deleteCart} className="btn btn-outline-danger btn-sm">
          Vaciar Carrito
        </button>
      </center>
    )
  }
  
export default Cart
  
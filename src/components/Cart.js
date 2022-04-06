import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom"
import { useCartContext } from "./CartContext"

function Cart() {

  const { cartList, deleteCart, deleteProd, totalPrice } = useCartContext()

    const addOrder = (e) => {
      e.preventDefault();
      let order = {}

      order.buyer = {name: "Facundo", email: "wtfanche@gmail.com", tel: "1186546787"}
      order.total = totalPrice()

      order.items = cartList.map(cartItem => {
          const id = cartItem.id
          const name = cartItem.name
          const price = cartItem.price * cartItem.cantidad

          return {id, name, price}
      })

      const dataBase = getFirestore()
      const qColl = collection(dataBase, "ordenes")
      addDoc(qColl, order)
      .then(resp => console.log(resp.id))
    } 

    return (
      <div className="container-fluid">
        {
          (cartList.length === 0)
          &&
          <center>
            <p>Todavia no agregaste productos a tu carrito</p>
            <Link to="/">
              <button className="btn btn-warning btn-sm">
                Ir a productos
              </button>
            </Link>
          </center>
        }
        {
          (cartList.length >= 1)

          &&
          <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Producto</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Precio</th>
                <th scope="col" className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(prod => 
                <tr key={prod.id}>
                  <td className="text-center">
                      <h6>{prod.name}</h6>
                  </td>
                  <td className="text-center">
                    <p>{prod.cantidad}</p>
                  </td>
                  <td className="text-center"><p>${prod.price * prod.cantidad}</p></td>
                  <td>
                    <button onClick={() => deleteProd(prod.id)} className="delete btn btn-danger btn-sm">x</button>
                  </td>
                </tr>  
              )}
            </tbody>
          </table>
          
          <div className="row justify-content-end">
            <div className="col-3">
                <p>Total: ${totalPrice()}</p>
            </div>
          </div>
          
          <br></br>
          <div className="row justify-content-end">
            <div className="col-3">
              <button onClick={deleteCart} className="btn btn-danger btn-sm">
                Vaciar Carrito
              </button>
              <button onClick={addOrder} className="btn btn-success btn-sm">
                Realizar orden
              </button>
            </div>
          </div>
          </>
        }
      </div>
    )
  }
  
export default Cart
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useCartContext } from "./CartContext"
import CartTable from "./CartTable";

function Cart() {
  const [formData, setFormData] = useState({name: "", email: "", phone: ""})
  const [id, setId] = useState(null)
  const { cartList, deleteCart, totalPrice } = useCartContext()

    const addOrder = async (e) => {
      e.preventDefault();
      let order = {}

      order.buyer = formData
      order.total = totalPrice()

      order.items = cartList.map(cartItem => {
          const id = cartItem.id
          const name = cartItem.name
          const price = cartItem.price * cartItem.cantidad

          return {id, name, price}
      })

      const dataBase = getFirestore()
      const qColl = collection(dataBase, "ordenes")
      await addDoc(qColl, order)
      .then(({id}) => setId(id))
      .catch(err => console.log(err))
      .finally(() => deleteCart())
    }

    const changeHandler = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      } )
    }

    return (
      <div className="container-fluid">
        {id && <label className='alert alert-success'>Gracias por tu compra. Podras realizar el seguimiento con el ID: {id}</label>}
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
          <CartTable />
          <div className="row justify-content-end text-center mt-3">
            <div className="col-3">
              <button onClick={deleteCart} className="btn btn-danger btn-sm">
                    Vaciar Carrito
              </button>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-3 mb-2">
            <form className="col-3"   
              onSubmit={addOrder} 
              >
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={formData.name}
                      onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                      type="email" 
                      className="form-control" 
                      value={formData.email}
                      onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      value={formData.phone}
                      onChange={changeHandler}
                  />
                </div>
                <button onClick={addOrder} className="btn btn-success btn-sm">
                  Realizar orden
                </button>
              </form>
            </div>
          </>
        }
      </div>
    )
  }
  
export default Cart

// minimo dos componentes hijos
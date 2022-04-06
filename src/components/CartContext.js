import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {

    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{

        const fProd = cartList.find(
            (cartList) => cartList.id === item.id
        )

        if (fProd) {
            fProd.cantidad += item.cantidad
            setCartList( [ ...cartList] )
        } else {
            setCartList( [ ...cartList, item ] )
        }
        
    }

    const cartQty = () => {
        return cartList.reduce((total, item) => total += item.cantidad, 0)
    }
    
    const totalPrice = () => {
        return cartList.reduce((total, item) => total = total+(item.price * item.cantidad), 0)
    }
      
    const deleteProd = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const deleteCart = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            cartQty,
            totalPrice,
            deleteCart,
            deleteProd
        }}
        >
            { children }
        </CartContext.Provider>

    )
        
}

export default CartContextProvider
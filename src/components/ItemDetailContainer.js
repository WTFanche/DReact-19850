import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetchB } from "../helpers/getFetch"
import ItemDetail from "./ItemDetail"



function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    const { detailId } = useParams()
    

    useEffect(()=>{
        gFetchB
        .then( resp => setProd(resp.filter(prod=> prod.id === detailId)))
        .catch(err => console.log(err))
    }, [])
    
    

    return (
        <div>
            <ItemDetail product={prod}/>
        </div>
    )
}

export default ItemDetailContianer

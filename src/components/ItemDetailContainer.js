import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetchB } from "../helpers/getFetch"
import ItemDetail from "./ItemDetail"



function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    
    useEffect(()=>{
        gFetchB("1")
        .then(prod => setProd(prod))
        .catch(err => console.log(err))
    }, [])
    
    const { detailId } = useParams()

    return (
        <div>
            <ItemDetail product={prod}/>
        </div>
    )
}

export default ItemDetailContianer

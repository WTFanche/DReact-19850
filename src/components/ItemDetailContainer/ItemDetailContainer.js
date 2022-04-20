import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore';



function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    const { detailId } = useParams()
    const [load, setLoad] = useState(true)
    

    useEffect(()=>{

        async function getById() {

            try {
              const db = getFirestore();
              const item = doc(db, 'Products' , detailId);
              const response = await getDoc(item)
              
              setProd( { id: response.id, ...response.data()} );
              setLoad(false);
            } catch (error) {
              /* Ingresar de Errores */
            }
            
          }
      
          getById();




    },[detailId])
    
    

    return (
        <>
        {
            load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div>
            
            :

            <center>
                <ItemDetail product={prod}/>
            </center>
        }
        </>
    )
}

export default ItemDetailContianer

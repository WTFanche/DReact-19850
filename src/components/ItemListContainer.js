import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


function ItemListContainer() {

    const [prods, setProds] = useState([])
    const [load, setLoad] = useState(true)
    

    const { idColl } = useParams()

    useEffect(() => {
        
        async function getAll() {
      
            try {
              const dataBase = getFirestore()
              const queryCollection =  collection(dataBase, 'desafios')
              
              const filterQuery = idColl ? query(queryCollection, where('category', '==', idColl)) : queryCollection
      
              
                const response = await getDocs(filterQuery)
                setProds(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) ));
                setLoad(false);
      
            } catch (error) {
              
            }
                  
        }
      
        getAll();


        /* if (id) {
            // inicio promesa
            getFetch
            .then( resp => setProds(resp.filter(prod=> prod.category === id)))
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
            // fin promesa

        } else {
            // inicio promesa
            getFetch
            .then( resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
            // fin promesa
        } */
    }, [idColl])


    console.log(prods);

    return(
        <>
                {load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div>
                    :
                        <ItemList prods={prods} />
                }
        </>

    );
}

export default ItemListContainer;
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';
import img from '../Media/toall2.jpeg';



function ItemListContainer({saludo}) {
    
    const [prods, setProds] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        // inicio promesa
        getFetch
        .then( resp => setProds(resp))
        .catch(err => console.log(err))
        .finally(() => setLoad(false))
        // fin promesa
    }, [])
    
    
    return(
        <>
            <div className="container-fluid text-center">{saludo}</div>

            {   load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div>
                :
                prods.map(prod => 
                    <div key={prod.id}className='col-md-4'>                        
                        <div className="card w-100 mt-5" >
                            <div className="card-header">
                                {`${prod.name} - ${prod.price}`}
                            </div>
                            <div className="card-body">
                                <img src={img} alt='imagen' className='w-50'/>                                                          
                            </div>
                            <div className="card-footer">  
                                <button className="btn btn-outline-primary btn-block">
                                    detalle del producto
                                </button>                                                       
                            </div>
                        </div>
                    </div>

            )} 
        </>

    );
}

export default ItemListContainer;
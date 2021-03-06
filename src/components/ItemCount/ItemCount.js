import { useState } from 'react'


function Itemcount({stock, initial, onAdd}) {

    const [ count, setCount ]  = useState(1)

            const handleCountS = () => {
                if (count >= initial && count < stock) {
                    setCount( count + 1 )
                }
                
            }
    
            const handleCountR = () => {
                if (count > initial) {
                    setCount( count - 1 )
                }
            }
                    

    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center"> 
                    <div className="col-1">
                        <button onClick={handleCountR} className="btn btn-light btn-sm">-</button>
                    </div>
                    <div className="col-1">
                        <label>{count}</label>
                    </div> 
                    <div className="col-1">
                        <button onClick={handleCountS} className="btn btn-light btn-sm">+</button>
                    </div> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-2"> 
                        <button onClick={( ) => onAdd(count)} className="btn btn-success btn-sm">Agregar al carrito</button>
                    </div>
                </div> 
            </div>
        </>

    );
}

export default Itemcount;

import { Link } from "react-router-dom";


function Item({prod}) {
    return (        
            <div key={prod.id}className='col-md-3'>                        
                <div className="card w-100 mt-5" >
                    <center className="card-header">
                        {`${prod.name} - ${prod.price}`}
                    </center>
                    <center className="card-body">
                        <img src={prod.img} alt='imagen' className='w-50'/>                                                          
                    </center>
                    <center className="card-footer">  
                        <Link to={`/detail/${prod.id}`} >
                            <button className="btn btn-outline-primary btn-block">
                                Ver detalle
                            </button>    
                        </Link>                                                   
                    </center>
                </div>
            </div>        
    )
}

export default Item;

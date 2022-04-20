import Item from "../Item/Item";

function ItemList({ prods }) {
    return (
        <>
            {prods.map((prod) => <Item prod={prod} key={prod.id} /> )}
        </>
    )
}

export default ItemList;





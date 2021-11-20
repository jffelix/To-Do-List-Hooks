import React, { useContext } from 'react';
import ItemList from '../components/ItemList.jsx';

function ItemListEntry(props) {

    // const contextListEntry = useContext(ItemList.contextList);

    function DeleteItem(event) {
        event.preventDefault();
        console.log('props.item.id: ', props.item.id);
    }

    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.quantity}</p>
            <button>Update Item</button>
            <button onClick={(event) => DeleteItem(event)}>Delete Item</button>
            <p>________________________________________</p>
        </div>
    )

}

export default ItemListEntry;
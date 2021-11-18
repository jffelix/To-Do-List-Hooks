import React, { useContext } from 'react';
import ItemList from '../components/ItemList.jsx';

function ItemListEntry(props) {

    // const contextListEntry = useContext(ItemList.contextList);

    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.quantity}</p>
            <button>Update Item</button>
            <button>Delete Item</button>
            <p>________________________________________</p>
        </div>
    )

}

export default ItemListEntry;
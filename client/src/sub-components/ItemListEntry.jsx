import React, { useContext } from 'react';
import ItemList from '../components/ItemList.jsx';

function ItemListEntry(props) {

    // const contextListEntry = useContext(ItemList.contextList);

    return (
        <div>
            <p>{props.item.id}</p>
            <p>{props.item.name}</p>
            <p>{props.item.quantity}</p>
            <p>___________________________________</p>
        </div>
    )

}

export default ItemListEntry;
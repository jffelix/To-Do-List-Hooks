import React, { useContext } from 'react';
import App from '../App.jsx';
import ItemListEntry from '../sub-components/ItemListEntry.jsx';

function ItemList() {

    const contextList = useContext(App.ItemListContext);

    ItemList.contextList = contextList;

    // console.log("contextList: ", contextList);

    return (
        <div>
            <div>
                <h2>My List</h2>
            </div>
            {contextList.map((item, index) =>
                <ItemListEntry item={item} key={index} />
            )}
        </div>
    )
}

export default ItemList;
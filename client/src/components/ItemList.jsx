import React, { useContext } from 'react';
import App from '../App.jsx';

function ItemList() {

    const contextList = useContext(App.ItemListContext);

    console.log("contextList: ", contextList);

    return (
        <div>
            <h3>Hello from ItemList!</h3>
        </div>
    )
}

export default ItemList;
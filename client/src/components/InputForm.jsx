import React, { useState, useEffect } from 'react';

function InputForm(event) {

    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");

    function logTest(event) {
        event.preventDefault();

        var itemObj = {};

        itemObj.item = itemName;
        itemObj.quantity = itemQuantity;

        console.log("itemObj: ", itemObj);
    }

    return (
        <div>
            <form onSubmit={(event) => logTest(event)}>
                <h4>Item</h4>
                <input name="itemName" value={itemName} onChange={(event) => setItemName(event.target.value)} />
                <h4>Quantity</h4>
                <input name="itemQuantity" value={itemQuantity} onChange={(event) => setItemQuantity(event.target.value)} />
                <p> </p>
                <button>Submit Item</button>
            </form>
        </div>
    )
}

export default InputForm;
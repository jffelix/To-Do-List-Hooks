import React, { useState, useEffect } from 'react';

function InputForm(event) {

    const [itemName, setItemName] = useState("");

    function logTest(event) {
        event.preventDefault();

        console.log("itemName: ", itemName);
    }

    return (
        <div>
            <form onSubmit={(event) => logTest(event)}>
                <h4>Item</h4>
                <input name="itemName" value={itemName} onChange={(event) => setItemName(event.target.value)} />
                <h4>Quantity</h4>
                <input name="itemQuantity" />
                <p> </p>
                <button>Submit Item</button>
            </form>
        </div>
    )
}

export default InputForm;
import React from 'react';
import ReactDOM from 'react-dom';
import HookComponent from './HookComponent.js';

function App() {
    return (
        <div>
            <h1>To Do List (Hooks Version)</h1>
            {/* <HookComponent /> */}
        </div>
    )
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App/>, rootElement);
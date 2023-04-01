import React from "react";
import ReactDOM from 'react-dom/client';

const ChildComponent = () => (<h1>Child Component</h1>)

const MainComponent = () => {
    return(
        <div className="container">
            <h1>Main Heading from MainComponent</h1>
            <ChildComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
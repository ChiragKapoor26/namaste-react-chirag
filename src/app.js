import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
const AppLayOut = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
// Creating the root
const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(<AppLayOut/>);

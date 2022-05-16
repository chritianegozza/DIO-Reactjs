import React from "react"
import  ReactDOM  from "react-dom"
import Button from './Button'
import "./styles.css"


function soma(a, b) {
    alert(a + b)
}

function App() {
    <div className="App">
        Hello wolrd
        <Button onClick={() => soma(10, 20)} name="Christiane Gozza"  />
    </div>
}



const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
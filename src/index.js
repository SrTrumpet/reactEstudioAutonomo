import React from 'react'
import ReactDom from 'react-dom'

const root = ReactDom.createRoot(document.getElementById('root'))


function Greeting(){

    return <div>
    <h1>Este es un componente</h1>
        <p></p>
    </div>

}

root.render(
    <div>
        <Greeting/>
        <Greeting/>
        <Greeting/>
    </div>

)
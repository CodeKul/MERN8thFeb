import React,{useContext} from 'react'
import MyContext from './MyContext'

function GrandChild() {
    const context = useContext(MyContext)
    return (
        <div>
            <h1>Grandchild</h1>
            <p>{context.x}</p>
        </div>
    )
}

export default GrandChild

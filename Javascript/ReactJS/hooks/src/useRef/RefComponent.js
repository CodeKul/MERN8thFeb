import React,{useRef} from 'react'

function RefComponent() {
    const refVar = useRef(0)  //returns a object {current:0} 
    console.log(refVar)
    return (
        <div>
            <input type="text" ref={refVar}/>
        </div>
    )
}

export default RefComponent

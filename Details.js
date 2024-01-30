import { useState } from "react"
import About from "./About"


const Details =(props) => {
    const [ count1 , setCount1] = useState(0);
    const [ count2 , setCount2] = useState(2);
   
    return (
        <div className="detailsComponent">
            <h1> {props.name}</h1>
            <h1> count1: {count1}</h1>
            <h1> count2: {count2}</h1>
            <button onClick={
                ()=>{
                    const data=count1+1;
                    setCount1(data);
                }
            }>click</button>
            <h3> Location :{props.location} </h3>
            <h3> contact: @vavilapalli20</h3>
        </div>
    )
}

export default Details
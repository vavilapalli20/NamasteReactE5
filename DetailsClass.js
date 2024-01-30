import React from "react"


class DetailsClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:2
        }
    }

    render(){
        const {name,location}=this?.props;
        return(
            <div className="detailsComponent">
                <h1> Name: {name}</h1>
                <h1> count1:{this.state.count1}</h1>
                <h1> count2:{this.state.count2}</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            count1: this.state.count1+1,
                            count2: this.state.count2+1,
                        })
                    }
                }>click</button>
                <h3> Location :{location} </h3>
                <h3> contact: @vavilapalli20</h3>
            </div>
        )
    }
}

export default DetailsClass;
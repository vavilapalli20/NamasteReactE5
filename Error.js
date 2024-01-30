import { useRouteError } from "react-router-dom";




const Error = () =>{
    const err=useRouteError();
    return(
        <div className="Error-component">
            <div>
                <h1>Error Not Found</h1>
                <h2> {err.status}:{err.statusText}</h2>
            </div>
        </div>
    ); 
};

export default Error;
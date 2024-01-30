import { RES_URL } from "../utils/constants";

const RestroContainer=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    //console.log(cuisines.length);
    var data=[];
    var count=0;
    var curr=0;
    for(var i=0;i<cuisines.length;i++){
        if(count>15) break;
        for(var j=0;j<cuisines[i].length;j++){
            count++;
        }
        curr=i;
        data.push(cuisines[i]);
    }
    if(curr!=cuisines.length -1){
        data.push("...");
    }
    
    return(
        <div className="restrocard p-4 m-4 w-[240px] rounded-lg bg-stone-400 ">
            <img className="res-logo rounded-lg w-80 h-40 object-cover" alt="restrant-Logo"src={RES_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{data.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export const promotedRestCard = (RestroContainer) =>{
    return (props) =>{
        return (
            <div>
                <label> Promoted</label>
                < RestroContainer {... props}/>
            </div>
        )
    }
}

export default RestroContainer;
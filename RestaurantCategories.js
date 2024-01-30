import { RES_URL } from "../utils/constants";
const RestaurantCategories = ({catdata}) => {
    console.log(catdata)
    return (
        <div>
            {catdata.map((item)=> (
                <div key={item.card.info.id} className="border-b-2 py-4 text-left px-3 flex justify-between">
                    <div className="w-10/12 px-3" >
                        <div className="">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span> ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-sm"> {item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 ">
                        <div className="absolute">
                        <button className=" p-1 bg-black text-white shadow-lg  rounded-lg mx-12 box-border">Add +</button>
                        </div>
                        <img src={RES_URL+ item.card.info.imageId} className="w-full "></img>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default RestaurantCategories;
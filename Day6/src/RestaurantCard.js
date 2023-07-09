import {cloudinary_Image_url} from "../config";

const RestaurantCard =({cloudinaryImageId,name,cuisines,slaString})=>(

    <div className="card">
    <img src={cloudinary_Image_url +
          cloudinaryImageId}/>
    <h2>{name}</h2>
    <h3 className="cuisine">{cuisines.join(", ")}</h3>
    <h4>{slaString}</h4>
    </div>
)

export default RestaurantCard;
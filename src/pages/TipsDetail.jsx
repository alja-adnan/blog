import { Link, useParams } from "react-router-dom";
import TravelTips from "./travelTips";
import { TravelTipsContent } from "../constent/paragaraph";
import { TravelImg } from "../constent/imgLinks";


function TipsDetail(){

     const {slug}= useParams();
     const allTips = TravelTipsContent[0];
     const tip = allTips.tip.find(item => item.slug === slug);
    
    return(
            <div className="max-w-2xl mx-auto px-4 py-8">                                                                                                                  
              <div className="text-center px-4 max-w-3xl mx-auto py-8">
                <h2  className="text-2xl font-bold text-blue-900 mb-4">{allTips.Title}</h2>
              </div>

              <div  className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                {TravelImg.map((travelimg)=>(
                    <div key={travelimg.id}  className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
                        <img 
                        src={travelimg.src} 
                         className="w-full h-full object-cover"/>
                        console.log("TravelImg", TravelImg);

                    </div>
                    
                ))}

            </div>



             <div className="max-w-2xl mx-auto px-4 py-8">
                  <h1 className="text-2xl font-bold text-blue-800 mb-4">
                      {tip.heading}
                     </h1>

                   {tip.para.map((paragraph, index) => (
                   <p key={index} className="mb-4 text-gray-700 text-lg">
                   {paragraph}
                   </p>
                 ))}
             </div>
            <Link to="/tips">
            <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">back</button>
            </Link> 
             </div>
       
    )
}
export default TipsDetail;
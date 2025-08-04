import { TravelTipsContent } from "../constent/paragaraph";
import { TravelImg } from "../constent/imgLinks";
import { Link } from "react-router-dom";



function TravelTips() {

  
  return (
    <div className="text-center px-4 max-w-3xl mx-auto py-8">
      {TravelTipsContent.map((tips ,index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            {tips.Title}
          </h2>


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

          {tips.tip.map((item)=>(
            <div key={item.slug} className="mb-8" >
              <Link to={`/tips/${item.slug}`}> 
              <h2 className="text-2xl font-bold text-blue-900 mb-4" >
                {item.heading}
              </h2>
              </Link>

            </div>

          ))} 
          
          
        
        
        </div> 
      ))}
    </div>
  );
}

export default TravelTips;

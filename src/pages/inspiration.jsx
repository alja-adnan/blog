import { InspirationContent } from "../constent/paragaraph";
import { InspiationImg } from "../constent/imgLinks";
import { Link } from "react-router-dom";

function Inspiration(){
    return(
        <div className="text-center px-4 max-w-3xl mx-auto py-8"> 
           {InspirationContent.map((inspir,index)=>(
            <div key={index}>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">{inspir.Title}</h2>

                    <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center mt-1.5 mb-1.5">
                        {InspiationImg.map((img)=>(
                            <div key={img.id} className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
                                <img src={img.src} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                 {inspir.inspiration.map((item)=>(
                    <div key={item.slug} className="text-2xl font-bold text-blue-900 mb-4" >
                        <Link to={`/inspiration/${item.slug}`}>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">{item.heading}</h2>
                        </Link>
                    </div>
                 ))}   
               
               
            </div>
           ))}
        </div>
    )

}
export default Inspiration;
import { useParams } from "react-router-dom";
import { InspirationContent } from "../constent/paragaraph";
import { Link } from "react-router-dom";
import { InspiationImg } from "../constent/imgLinks";

function InspirationDetail()
{


    const {slug} = useParams();
    const Allinspir = InspirationContent[0]
    const inspiration= Allinspir.inspiration.find(item => item.slug === slug);

    return(
        <div className="max-w-2xl mx-auto px-4 py-8"> 
                <div className="text-center px-4 max-w-3xl mx-auto py-8"> 
                <h2 className="text-2xl font-bold text-blue-900 mb-4">{Allinspir.Title}</h2>
                </div>

                   <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center mt-1.5 mb-1.5">
                        {InspiationImg.map((img)=>(
                            <div key={img.id} className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
                                <img src={img.src} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{inspiration.heading}</h2>

             {inspiration.para.map((paragraph, index) => (
                   <p key={index} className="mb-4 text-gray-700 text-lg">
                   {paragraph}
                   </p>
                 ))}

               <Link to="/inspiration">
            <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">back</button>
            </Link>    
               
         
        </div>
    )
}
export default  InspirationDetail;
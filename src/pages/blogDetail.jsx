import { useParams } from "react-router-dom"
import { BlogPageContent } from "../constent/paragaraph";
import { KashmirBlogImg } from "../constent/imgLinks";
import { Link } from "react-router-dom";


function BlogDetail(){
     const {slug}=useParams();
     const allblog = BlogPageContent[0];
     const info = allblog.info.find(item=> item.slug===slug);
     
    return(
        <div className="max-w-2xl mx-auto px-4 py-8">
              <div className="text-center px-4 max-w-3xl mx-auto py-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">{allblog.Title}</h2>
                <p>{allblog.intro}</p>
              </div>
               
                        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                            {KashmirBlogImg.map((img)=>(
                                <div key={img.imgid} className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
                                    <img
                                    src={img.src}
                                    className="w-full h-full object-cover"
                                     />

                                </div>
                            ))}
                        </div>

               <div className="max-w-2xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">{info.heading}</h2>

                {info.para.map((paragraph,index) => (
                   <p key={index} className="mb-4 text-gray-700 text-lg">
                   {paragraph}
                   </p>
                 ))}

               <Link to="/blog">
               <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">back</button>
               </Link>  
               </div>
        </div>
    )

}
export default BlogDetail
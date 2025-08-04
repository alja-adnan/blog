import { KashmirBlogImg } from "../constent/imgLinks";
import { BlogPageContent } from "../constent/paragaraph";
import { Link } from "react-router-dom";


function Blog(){

    
    return(
        <div className="text-center px-4 max-w-3xl mx-auto py-8">
            {BlogPageContent.map((blog,index)=>(
                <div key={index}>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 ">{blog.Title}</h2>
                    <p>{blog.intro}</p>

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
                    {blog.info.map((item)=>(
                        <div>
                            <Link to={`/blog/${item.slug}`}>
                            <h2 className="text-2xl font-bold text-blue-900 mb-4 ">{item.heading}</h2>
                            </Link>
                           
                        </div>
                    ))}   

                   
                </div>
            ))}
        </div>
    )

}
export default Blog;
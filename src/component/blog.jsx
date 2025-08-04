import kashmir from "../assets/kashmir.jpg";
import { blogContent } from "../constent/paragaraph";

function BlogOverview() {
  return (
    <div className="text-center px-4 py-8 max-w-xl mx-auto">
        {blogContent.map(({id,heading,src,para})=>(
            <div key={id}>
          <h2 className="text-blue-900 font-bold text-2xl mb-4">{heading}</h2>  
          <img src={src} alt="blog"  className="rounded-lg w-600 h-150 mx-auto"/>
          <p className="text-gray-700 mb-4">{para}</p>
           </div>  
        ))}
   
      <a
        href="/blog"
        className="text-purple-700 underline mt-4 inline-block hover:text-purple-900"
      >
        Read More →
      </a>
    </div>
  );
}

export default BlogOverview;

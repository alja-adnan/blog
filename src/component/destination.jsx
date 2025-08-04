
import { DestinationImg } from "../constent/imgLinks";

function Destination() {
  return (
    <div className="mt-10 px-4">
      <div className="text-center">
        <h1 className="text-blue-900 font-bold text-2xl mt-10 mb-10">
          Best Destinations
        </h1>

        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
          {DestinationImg.map(({ id, src, alt, name }) => (
            <div key={id} className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
              <p className="text-center text-blue-800 font-medium mt-2">{name}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;

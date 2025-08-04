import travelpic from "../assets/travelpic.jpg";

function Hero() {
  return (
    <div className=" bg-blue-100 px-6 py-10 mb=10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
       
        <div className="w-full md:w-1/2">
          <img
            src={travelpic}
            alt="Travel"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

   
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full text-center md:text-left gap-6">
        
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Travel Memories <br /> You’ll Never <br /> Forget
            </h1>
          </div>

          <div>
            <p className="text-base text-black max-w-md">
              Every journey leaves a mark — from sunsets in faraway places to
              the memories that bring you home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


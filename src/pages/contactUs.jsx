import { useState } from "react";
import { useForm } from "react-hook-form"
function ContactUs() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{

    console.log(data)
    alert("thank you for contacting us")}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md text-center">
        <h2 className="text-blue-700 text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Your Name" {...register("name",{required:{value:true,message:"enter name"}})}
             
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
             {errors.name&& <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email" {...register("email",{required:{value:true,message:"enter your email"}})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.email&&<p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message" {...register("message",{required:{value:true,message:"your message is missing"}})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.message&&<p className="text-sm text-red-600">{errors.message.message}</p>}
          </div>
          <div>
            <button type= "submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

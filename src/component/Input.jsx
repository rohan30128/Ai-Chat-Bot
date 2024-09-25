import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useForm } from "react-hook-form";
import toast  from 'react-hot-toast';
import { Mycontext } from "../context/MyContext.jsx"

export default function Input() {
  const {question,setQusetion} = useContext(Mycontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const que = data.question
    const content = {"contents":[{"parts":[{"text":que}]}]}
    reset();
    const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAxVOCzZCXRev37RHHDr1PKc_ZrQQgA2JA",content);

    const res =await {
      que : data.question,
      ans : response.data.candidates[0].content.parts[0].text
    }
    setQusetion([...question, res]);
  }

  useEffect(() => {
    if (errors.question) {
      toast.error('This field is required');
    }
  }, [errors.question]);
  return (
    <div className="mt-3 sm:ml-28 relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="">
        <input
        {...register("question", { required: true })}
          type="text"
          placeholder="Enter a prompt here..."
          className="input bg-white-500 hover:bg-slate-100 border-slate-300 overflow-x-scroll border-1 sm:w-full focus:border-none w-[375px] h-20 sm:h-12 max-w-screen-lg"
        />
         
        <button className="absolute sm:right-20 right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-white font-bold py-1 px-2 rounded">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmddFY6ErGAUSNxDENnjtT9tmrq8R0J9SdQ&s"
            className="w-10"
          />
        </button>
        </label>
      </form>
    </div>
  );
}

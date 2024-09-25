import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <div
          id="my_modal_3"
          className="flex h-screen items-center justify-center "
        >
          <div className="modal-box shadow-md border-[2px] p-5 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} method="div">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                />
                <br />
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                />
                <br />
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                />
                <br />
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have account?
                  <Link to="/login" className="text-blue-500 underline cursor-pointer">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

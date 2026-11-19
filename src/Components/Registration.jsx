import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signupWithEmail , googleLogin } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signupWithEmail(data.email, data.password);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Register Me!",
      }).then((result) => {
        if (result.isConfirmed)
          Swal.fire({
            title: "Registration Successful!",
            text: "Provide your Email & Password to Login.",
            icon: "success",
          });
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed!", error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () =>{
    try {
      await googleLogin();
      navigate('/')
    } catch (error) {
      console.error("Failed to Login in Google!" , error.message)
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* email */}
          <div>
            <label className="block mb-3 text-md font-medium text-gray-700">
              {" "}
              Email:{" "}
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+]+@[a-z0-9.]+\.[a-z]{2,}$/i,
                  message: "Invalid Email Address",
                },
              })}
              type="email"
              placeholder="Enter your Email"
              className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40
                    `}
            />
            {errors.email && (
              <p className="text-sm italic text-red-500 mt-2" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* password */}
          <div>
            <label className="block mb-3 text-md font-medium text-gray-700">
              {" "}
              password:{" "}
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40
                    `}
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm italic text-red-500 mt-2" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* button submit */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 text-white rounded shadow-lg w-full 
                            cursor-pointer hover:bg-blue-700"
            >
              SignUp
            </button>
          </div>

          {/* Social Login  */}
          <div className="text-center my-4">
            <p className="text-black font-semibold">Or SignUp With</p>
            <div className="flex justify-center items-center my-2 gap-3">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex justify-center items-center gap-2 text-white bg-red-700 px-3 py-2 
                        rounded hover:bg-red-800 cursor-pointer"
              >
                {" "}
                <FaGoogle />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center gap-2 text-white bg-blue-600 px-3 
                        py-2 rounded hover:bg-blue-800 cursor-pointer"
              >
                {" "}
                <FaFacebook /> <span>Facebook</span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center gap-2 text-white bg-gray-700 
                          px-3 py-2 rounded hover:bg-gray-800 cursor-pointer"
              >
                {" "}
                <FaGithub />
                <span>GitHub</span>
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Form Submit
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", data);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 font-[sans-serif]">
        <div className="flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-6 md:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={280}
                  height={140}
                  className="mb-8 mx-auto block"
                />
              </Link>
              <h2 className="text-purple-500 text-center text-2xl font-medium pacifico">
                Login Form
              </h2>
              <form onSubmit={handleLogin} className="mt-4 md:mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 dark:text-white text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required
                      className="w-full text-gray-800 dark:text-white text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600"
                      placeholder="Enter Email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 dark:text-white text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full text-gray-800 dark:text-white text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600"
                      placeholder="Enter password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    <svg
                      onClick={togglePasswordVisibility}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        // Eye-slash icon for hiding password
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM64 80c13.234 0 24-10.766 24-24s-10.766-24-24-24-24 10.766-24 24 10.766 24 24 24zm38.293-6.994c-4.76-7.219-23.441-32.004-55.293-32.004C32.045 32 13.447 56.775 8.707 63.994c4.76 7.219 23.441 32.004 55.293 32.004C95.854 96 114.535 71.205 102.293 73.006zM64 40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                      ) : (
                        // Eye icon for showing password
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zm0-8c13.234 0 24-10.766 24-24s-10.766-24-24-24-24 10.766-24 24 10.766 24 24 24zm0-40c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16z" />
                      )}
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm text-gray-800 dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/"
                      className="text-purple-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none"
                  >
                    Login
                  </button>
                </div>
                <p className="text-gray-800 dark:text-white text-sm !mt-8 text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    href={"/register"}
                    className="text-purple-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-left">
          <p className="text-3xl font-medium">
            Welcome to <br />
            <span className="text-8xl font-bold ">Votely</span>
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-3xl font-semibold text-center mb-4">Sign Up</div>
          <p className="text-center text-gray-600 mb-6">
            Sign up to vote for your favourite vehicle and get the latest news
            about vehicles
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="username"
                placeholder="Enter full name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="vin" className="block text-sm font-medium text-gray-700">VIN</label>
              <input
                type="text"
                id="vin"
                placeholder="Enter VIN"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
            <p className="mt-2">
              By signing up you accept our{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                terms and conditions & privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
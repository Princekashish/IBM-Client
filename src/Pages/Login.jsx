import React from 'react';

function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-orange-500 text-white">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Welcome to Login</h2>
          <p className="text-lg mb-6">Don't have an account?</p>
          <button className="bg-white text-orange-500 py-2 px-6 rounded-full">Sign Up</button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6">LOG IN</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">USERNAME</label>
              <input
                type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600">PASSWORD</label>
              <input
                type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Password" />
            </div>
            <button
              type="submit" className="w-full py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">LOG IN
            </button>
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-orange-500">Forgot Password</a>
            </div>
            <div className="flex justify-center mt-6">
              <a href="#" className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1">G</a>
              <a href="#" className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1">F</a>
              <a href="#" className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1">T</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

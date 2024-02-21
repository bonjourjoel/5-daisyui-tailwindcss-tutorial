import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form>
          <div className="mb4">
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn bg-purple-600 text-white w-full rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

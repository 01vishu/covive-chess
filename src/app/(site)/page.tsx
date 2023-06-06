"use client";

import AuthForm from "./components/AuthForm";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="flex items-center flex-col p-4">
        <h3 className="text-7xl font-bold mb-2">
          Covive <span className="text-primary">Chess</span>
        </h3>
        <span className="font-medium text-xl mb-4">
          anytime and anywhere with your friends
        </span>
        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-col w-full items-center border-gray border-2 rounded-md ">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";

function UserProfile() {
  return (
    <div className="user-profile md:max-w-sm my-20 bg-gray-100 p-4 sm:p-4 sm:p-6 md:p-8 max-w-xs md:text-xl sm:max-w-sm md:max-w-md mx-auto my-10 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 text-center">
        John Doe
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center hover:text-blue-500 hover:shadow-xl">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;

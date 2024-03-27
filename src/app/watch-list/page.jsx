import React from "react";

const WatchList = () => {
  return (
    <div>
      <h1 className=" text-center text-2xl">Watch List</h1>

      <form
        action="/auth/signout"
        method="post"
        className=" flex flex-col justify-center items-center"
      >
        <button
          className=" bg-red-600 p-2 text-white rounded-md "
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default WatchList;

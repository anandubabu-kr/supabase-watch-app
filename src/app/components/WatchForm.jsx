import React from "react";
import { addWatch } from "../server-actions/addWatch";

const WatchForm = () => {
  return (
    <form
      action={addWatch}
      className="flex flex-col justify-center align-middle bg-slate-50 p-2 m-3"
    >
      <h2 className=" text-center font-bold"> Add watch</h2>
      <div className="flex flex-col  items-center mt-2">
        <label className=" text-sm" htmlFor="brand">
          Brand
        </label>
        <input
          className=" bg-slate-100 max-w-[500px] rounded-md border border-slate-300 focus:outline-slate-400 p-1"
          id="brand"
          name="brand"
          required
          type="text"
        />
      </div>
      <div className="flex flex-col  items-center mt-2">
        <label className=" text-sm" htmlFor="modal">
          Modal
        </label>
        <input
          className=" bg-slate-100 max-w-[500px] rounded-md border border-slate-300 focus:outline-slate-400 p-1"
          id="modal"
          name="modal"
          required
          type="text"
        />
      </div>
      <div className="flex flex-col  items-center mt-2">
        <label className=" text-sm" htmlFor="referenceNumber">
          Reference Number
        </label>
        <input
          className=" bg-slate-100 max-w-[500px] rounded-md border border-slate-300 focus:outline-slate-400 p-1"
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          required
        />
      </div>
      <button
        className=" bg-slate-400 w-fit mx-auto mt-4 px-4 py-2 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default WatchForm;

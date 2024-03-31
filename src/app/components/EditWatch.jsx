"use client";
import React, { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

const EditWatch = ({ watch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white text-xs py-1 px-4 rounded-md mt-4"
      >
        edit
      </button>
      {isModalOpen ? (
        <EditWatchForm watch={watch} close={() => setIsModalOpen(false)} />
      ) : null}
    </>
  );
};

const EditWatchForm = ({ watch, close }) => {
  const [formData, setFormData] = useState({
    brand: watch.brand,
    modal: watch.modal,
    referenceNumber: watch.reference_number,
  });

  return (
    <div className=" bg-slate-900 bg-opacity-70 fixed top-0 left-0 right-0 bottom-0">
      <div className="p-2 bg-white mx-4 rounded-md border border-slate-100 mt-12">
        <h1 className=" text-center">Edit Watch Info</h1>

        <form
          className="flex flex-col justify-center align-middle bg-slate-50 p-2 m-3"
          action={updateWatch}
        >
          <input type="hidden" name="id" value={watch.id} />
          <div className="flex flex-col  items-center mt-2">
            <label className=" text-sm" htmlFor="brand">
              Brand
            </label>
            <input
              className=" bg-slate-100 max-w-[500px] rounded-md border border-slate-300 focus:outline-slate-400 p-1"
              id="brand"
              name="brand"
              required
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
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
              value={formData.modal}
              onChange={(e) =>
                setFormData({ ...formData, modal: e.target.value })
              }
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
              value={formData.referenceNumber}
              onChange={(e) =>
                setFormData({ ...formData, referenceNumber: e.target.value })
              }
            />
          </div>
          <button
            className="mx-auto bg-slate-300 px-4 py-1 mt-4 rounded-md"
            type="submit"
          >
            Update details
          </button>
        </form>
        <div className="flex justify-end">
          <button
            onClick={close}
            className="bg-red-600 text-white  text-xs py-1 px-4 rounded-md mx-4 mt-4"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWatch;

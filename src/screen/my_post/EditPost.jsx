import axios from "axios";
import React from "react";
import genereateToken from "../../utils/generateToken";

const EditPost = ({ dataEdit, isCancel, isRefetch }) => {
  console.log(dataEdit);
  function handleSubmitEdit(e) {
    e.preventDefault();

    let judul = e.target.judul.value;
    let body = e.target.body.value;

    const token = genereateToken();
    axios
      .put(
        `http://localhost:3888/api/post/update/${dataEdit.id}`,
        { judul, body },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        isRefetch()
        isCancel()
      });
  }

  return (
    <div className="w-full h-full fixed inset-0 flex justify-center items-center z-50 rounded-md">
      <form
        className="bg-white rounded-lg shadow-md w-auto p-4 h-auto"
        onSubmit={handleSubmitEdit}
      >
        <h1 className="text-center">FORM EDIT</h1>
        <div className="mt-4">
          <input
            type="text"
            id="judul"
            className="border border-slate-300 p-2"
            placeholder="masukan judul postingan"
            defaultValue={dataEdit.judul}
          />
        </div>

        <div className="mt-2">
          <textarea
            defaultValue={dataEdit.body}
            name="body"
            id="body"
            className="w-full h-20 border border-slate-300 p-2"
            placeholder="masukan isi postingan"
          ></textarea>
        </div>
        <button className="w-full py-2 bg-blue-600 mt-2 text-white">
          Kirim
        </button>
        <button
          className="w-full py-2 bg-red-600 mt-2 text-white"
          onClick={isCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPost;

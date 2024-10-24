import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import genereateToken from "../../utils/generateToken";
import EditPost from "./EditPost";

const MyPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isModalEdit, setIsModalEdit] = useState(false)
  const [dataPost, setDataPost] = useState({})

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['getPostByAuth'],
    queryFn: async () => {
      try {
        const token = genereateToken();
        const result = await axios.get("http://localhost:3888/api/mypost", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        return result.data;
      } catch (error) {
        console.log(error.response.data.message);
        throw new Error(error.response.message);
      }
    },
  });

  function handleOpenModal(id) {
    setIsModalOpen(prev => (prev === id ? null : id));
  }

  function handleEdit(dataEdit){
    setIsModalEdit(true)
    setIsModalOpen(false)
    setDataPost(dataEdit)
  }

  return (
    <main className="w-full min-h-screen pb-20 px-4">
      {data?.map((e) => (
        <div key={e.id} className="w-full h-auto py-2 bg-slate-100 shadow-lg px-2 mt-4 relative">
          <h1 className="font-bold text-lg">{e.judul}</h1>
          <p className="mb-2 mt-2">{e.body}</p>
          <div className="flex justify-between">
            <small>Author</small>
            <small>{e.createAt}</small>
          </div>
          <FaEllipsisV
            className="absolute top-2 right-2 fill-slate-400"
            onClick={() => handleOpenModal(e.id)}
          />

          {/* Modal */}
          <div
            className={`${
              isModalOpen === e.id ? "px-2 py-1 w-52 opacity-100" : "w-0 opacity-0"
            }  bg-white shadow-xl absolute top-7 right-2 overflow-hidden transition-all duration-500 `}
          >
            <div className="h-8 flex items-center" onClick={()=>handleEdit(e)}>
              <span >Edit</span>
            </div>
            <div className="h-8 flex items-center">
              <span>Delete</span>
            </div>
          </div>
        </div>
      ))}

      {
        isModalEdit ? (<EditPost isCancel={()=>setIsModalEdit(false)} dataEdit={dataPost} isRefetch={refetch}  />) : null
      }
    </main>
  );
};

export default MyPost;

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import genereateToken from '../../utils/generateToken'

const HomeScreen = () => {

  const {data, isLoading, refetch} = useQuery({
    queryKey : ["getAllPost"],
    queryFn : async ()=>{
      try {
        const result = await axios.get("http://localhost:3888/api/post/all")

        const sortedData = result.data.sort((a, b)=> new Date(b.createAt) - new Date(a.createAt))

        return sortedData;
      } catch (error) {
        console.log(error)
      }
    }
  })

  function handleSubmit(e){
    e.preventDefault()
    let token = genereateToken()
    let judul = e.target.judul.value;
    let body = e.target.body.value;

    axios.post("http://localhost:3888/api/post/create",{judul,body}, {
      headers : {
        authorization : `Bearer ${token}`
      }
    } )
    .then(res=>{
      refetch()
      e.target.reset()
    })

  }

  return (
    <main className='w-full min-h-screen'>
      <div className='w-full px-4 py-2'>
        <form onSubmit={handleSubmit}>
            <div className='mt-4'>
                <input type="text" id='judul' className='border border-slate-300 p-2' placeholder='masukan judul postingan' />
            </div>

            <div className='mt-2'>
                <textarea name="body" id="body" className='w-full h-20 border border-slate-300 p-2' placeholder='masukan isi postingan'></textarea>
            </div>
            <button className='w-full py-2 bg-blue-600 mt-2 text-white' >Kirim</button>

        </form>
      </div>

      <div className='w-full px-4 pb-20'>
        {/* card untuk post */}
        {
          data?.map((e)=>(
            <div className='w-full h-auto py-2 bg-slate-100 shadow-lg px-2 mt-4'>
            <h1 className='font-bold text-lg'>{e.judul}</h1>
            <p className='mb-2 mt-2'>{e.body}</p>
            <div className='flex justify-between'>
            <small>{e.User.nama}</small>
            <small>{e.createAt}</small>
            </div>
        </div>
          ))
        }
      </div>
    </main>
  )
}

export default HomeScreen
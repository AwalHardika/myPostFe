import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import genereateToken from '../../utils/generateToken'
import axios from 'axios'


const Profile = ({onLogout}) => {
    const navigate = useNavigate()
    function handleLogout(){
        sessionStorage.removeItem("token")
        onLogout()
        navigate("/")       
    }

    async function getUserByAuth(){
      try {
        const token = genereateToken()
        const result = await axios.get("http://localhost:3888/api/user", {
          headers : {
            authorization : `Apalah ${token}`
          }
        })
        
        return result.data
      } catch (error) {
        console.log(error)
      }
    }

    const {data, isLoading, refetch} = useQuery({
      queryKey : ['getUserByAuth'],
      queryFn : getUserByAuth
    })

  return (
    <div>
        <h1>Profile</h1>
        <h1>Nama : {data?.nama}</h1>
        <h1>Email : {data?.email}</h1>
        <button className='bg-red-500 text-white px-2 py-1' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
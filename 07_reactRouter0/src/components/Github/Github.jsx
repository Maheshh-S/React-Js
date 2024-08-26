import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // useEffect(() => {

    // fetch('https://api.github.com/users/Maheshh-s')
    // .then(Response => Response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
    // })
     
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-2xl p-4' >Github Followers : {data.followers}
    <img className='w-1/12 rounded-full' src={data.avatar_url} alt="github" />
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
 const Response = await fetch('https://api.github.com/users/Maheshh-s')
 return Response.json()
}
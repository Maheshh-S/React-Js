import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='bg-gray-500 p-6 text-xl' >User : {userId} </div>
  )
}

export default User
import React from 'react'
import { useParams } from 'react-router-dom'
function UserComp() {
    const {id} = useParams()
  return (
    
    <div>UserComp : {id}</div>
  )
}

export default UserComp